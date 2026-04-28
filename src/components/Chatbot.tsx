import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Phone, Send, User, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const isUrgent = (text: string): boolean => {
  const keywords = [
    'burst', 'flood', 'flooding', 'leak',
    'leaking', 'no heating', 'no hot water',
    'emergency', 'broken', 'urgent',
    'water coming through', 'pipe burst',
    'ceiling', 'gushing', 'overflowing'
  ];
  return keywords.some(keyword => 
    text.toLowerCase().includes(keyword)
  );
};

interface Message {
  id: string;
  text: string | React.ReactNode;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! Need a hand with your plumbing or heating? I can get you a quick quote or put you straight through to Paul.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState<'initial' | 'problem' | 'name' | 'phone' | 'postcode' | 'done'>('initial');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPostcode, setUserPostcode] = useState('');
  const [userProblem, setUserProblem] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [showPopup, setShowPopup] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    const pulseInterval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1500);
    }, 8000);

    return () => {
      clearTimeout(popupTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string | React.ReactNode, sender: 'bot' | 'user') => {
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(36).substr(2, 9), text, sender, timestamp: new Date() },
    ]);
  };

  const sendEmail = async (finalPostcode: string) => {
    const urgencyLabel = isEmergency 
      ? '🚨 EMERGENCY' 
      : '📋 New Enquiry';
    
    const badgeColor = isEmergency 
      ? '#dc2626' 
      : '#2563eb';

    const subject = isEmergency
      ? `🚨 URGENT EMERGENCY - ${userName} needs immediate help`
      : `New Enquiry - ${userName} from PJS Plumbing Website`;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CHATBOT_TEMPLATE_ID,
        {
          subject: subject,
          urgency_label: urgencyLabel,
          badge_color: badgeColor,
          customer_name: userName,
          customer_phone: userPhone,
          customer_postcode: finalPostcode,
          problem: userProblem,
          time: new Date().toLocaleString('en-GB')
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    } catch {
      // Silently handle — do not expose system info
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    addMessage(text, 'user');
    setInputValue('');

    setTimeout(() => {
      let currentIsEmergency = isEmergency;

      if (isUrgent(text) && step !== 'done') {
        if (!isEmergency) {
          setIsEmergency(true);
          currentIsEmergency = true;
        }
        
        if (step === 'problem' || step === 'initial') {
          setUserProblem(text);
          addMessage(
            "That sounds urgent. What's your name so Paul knows who to call?", 
            'bot'
          );
          setStep('name');
          return;
        }
      }

      if (step === 'initial') {
        addMessage("What's the problem? Give me a brief description and I'll make sure Paul has all the details when he calls.", 'bot');
        setStep('problem');
      } else if (step === 'problem') {
        setUserProblem(text);
        addMessage("Got it. What's your name?", 'bot');
        setStep('name');
      } else if (step === 'name') {
        setUserName(text);
        addMessage(`Thanks ${text}. What's the best phone number for Paul to call you back on?`, 'bot');
        setStep('phone');
      } else if (step === 'phone') {
        setUserPhone(text);
        addMessage("And your postcode? Just so Paul can confirm he covers your area.", 'bot');
        setStep('postcode');
      } else if (step === 'postcode') {
        setUserPostcode(text);
        sendEmail(text);
        setStep('done');

        if (currentIsEmergency) {
          addMessage(
            <div>
              <span>Thanks {userName}. Paul has been notified and will call you on {userPhone} as soon as possible. For the fastest response — call him directly right now:</span>
              <a 
                href="tel:01514402614"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  textDecoration: 'none',
                  marginTop: '8px'
                }}
              >
                📞 Call Paul Now — 0151 440 2614
              </a>
            </div>,
            'bot'
          );
        } else {
          addMessage(`Thanks ${userName}. Paul will call you back on ${userPhone} within a few hours. If anything gets worse before then, call him directly on 0151 440 2614.`, 'bot');
        }
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Paul&apos;s Quick Quote</p>
                  <p className="text-[10px] opacity-80">I&apos;m usually on a job, but I&apos;ll see this fast</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto bg-gray-50 p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "mb-3 flex",
                    msg.sender === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                      msg.sender === 'user'
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="border-t border-gray-100 p-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-105 active:scale-95"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-2 w-56 cursor-pointer rounded-2xl rounded-br-sm bg-white p-4 shadow-2xl ring-1 ring-black/5"
            onClick={() => {
              setIsOpen(true);
              setShowPopup(false);
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPopup(false);
              }}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-500 shadow-md ring-1 ring-black/5 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm font-semibold text-gray-800">
              💬 Got a plumbing problem? Ask me anything.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={pulse && !isOpen ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg",
          isOpen ? "bg-gray-800" : "bg-blue-600"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
