import { 
  FileText, 
  Printer, 
  CreditCard, 
  Ticket, 
  UserCheck, 
  Globe,
  Clock,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Kuila Online Store",
  email: "kuilanexus@kuilaonlinestore.in",
  whatsapp: "+91XXXXXXXXXX", // Placeholder, user mentioned contact button
  location: "Your Local Digital Partner",
  tagline: "Your One-Stop Shop for All Online Services.",
  founderStory: "Started as a small cyber café, we have evolved into a full-service digital hub. We bridge the gap between complex online systems and local customers who need reliable, quick, and friendly assistance."
};

export const SERVICES = [
  {
    id: "online-form",
    title: "Online Form Filling",
    description: "Expert assistance for job applications, university admissions, and government forms.",
    icon: FileText,
  },
  {
    id: "printing",
    title: "Photocopy & Printing",
    description: "High-quality black & white or color prints and document scanning services.",
    icon: Printer,
  },
  {
    id: "gov-services",
    title: "PAN & Aadhaar Help",
    description: "Support for PAN card applications, Aadhaar updates, and other official documents.",
    icon: UserCheck,
  },
  {
    id: "tickets",
    title: "Railway & Flight Booking",
    description: "Hassle-free ticket booking for your next journey. Confirmations on the spot.",
    icon: Ticket,
  },
  {
    id: "bills",
    title: "Bill Payments",
    description: "Pay your electricity, water, and insurance bills quickly and securely.",
    icon: CreditCard,
  },
  {
    id: "digital-help",
    title: "Digital Assistance",
    description: "Guidance for internet services, email setup, and basic computer tasks.",
    icon: Globe,
  }
];

export const STEPS = [
  {
    title: "Visit or Contact",
    description: "Drop by our store or send us your requirements over WhatsApp.",
    icon: MessageSquare
  },
  {
    title: "Verify Services",
    description: "We check the necessary documents and provide a quick quote.",
    icon: ShieldCheck
  },
  {
    title: "Get it Done",
    description: "Relax while we process your request. Collect your documents or confirmations.",
    icon: Clock
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    text: "Very reliable service for railway bookings. I always come here for my travel needs.",
    role: "Local Resident"
  },
  {
    name: "Sunita Das",
    text: "The form filling assistance is a lifesaver. They ensure everything is correct before submission.",
    role: "Student"
  },
  {
    name: "Amit Singh",
    text: "Fixed my Aadhaar card details in minutes. Very friendly and professional.",
    role: "Business Owner"
  }
];
