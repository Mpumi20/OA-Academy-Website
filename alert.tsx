import { Phone, MapPin, Mail, Users, BookOpen, Laptop, Bot, Calculator, FlaskConical, Heart, GraduationCap } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import heroImage1 from 'figma:asset/c5e5fe1c9704db082ea0ad32a9d362ddfff5d0e3.png';
import heroImage2 from 'figma:asset/c85726db15f337c88ff7894ab33b6be841eecb57.png';
import tiktokIcon from 'figma:asset/7a11e6518c1127ec17d8bf036f1dab3466f99621.png';

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: '',
    age: '',
    guardianName: '',
    guardianPhone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format data for WhatsApp message
      const whatsappData = `
*New Application from OA Academy Website*

*Applicant Information:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Program: ${formData.program}
${formData.age ? `Age: ${formData.age}` : ''}
${formData.guardianName ? `Guardian Name: ${formData.guardianName}` : ''}
${formData.guardianPhone ? `Guardian Phone: ${formData.guardianPhone}` : ''}
${formData.address ? `Address: ${formData.address}` : ''}

*Message:*
${formData.message}
      `.trim();

      console.log('Application submitted:', formData);
      console.log('WhatsApp format:', whatsappData);
      
      // TODO: Send to backend API that will trigger WhatsApp Business API
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Application submitted successfully! We will contact you on WhatsApp within 24 hours.');
      setIsDialogOpen(false);
      setFormData({ 
        fullName: '', 
        phone: '', 
        email: '', 
        program: '', 
        age: '', 
        guardianName: '', 
        guardianPhone: '', 
        address: '', 
        message: '' 
      });
    } catch (error) {
      toast.error('Failed to submit application. Please contact us directly on WhatsApp.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '27608828689'; // Format: country code + number without + or spaces
  const whatsappMessage = encodeURIComponent('Hi! I am interested in learning more about OA Academy programs.');

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">OA Academy</h1>
          </div>
          <div className="flex gap-4 items-center">
            <a href="tel:0608828689" className="flex items-center gap-2 hover:text-green-300 transition">
              <Phone className="w-5 h-5" />
              <span className="hidden md:inline">060 882 8689</span>
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-blue-50 to-yellow-100 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Transform Your Future with <span className="text-green-500">Technology Education</span>
              </h2>
              <p className="text-xl mb-6 text-gray-700">
                Are you working but need to improve your skills? We offer certified programs for adults and comprehensive STEM education for children and teens.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Apply Now
                </Button>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroImage1} alt="Computer Classes" className="rounded-lg shadow-xl w-full col-span-2" />
              <img src={heroImage2} alt="Youth Programs" className="rounded-lg shadow-xl w-full col-span-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Adult Computer Classes */}
            <Card className="border-2 border-green-500 shadow-lg hover:shadow-2xl transition">
              <CardContent className="p-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Laptop className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Computer Classes</h3>
                <p className="text-lg mb-4 text-gray-700">Perfect for working adults looking to improve their computer skills</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Microsoft Word, PowerPoint, Excel, OneNote</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Certified program: 1-2 months</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">Flexible schedule for working professionals</p>
                  </div>
                </div>
                <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold">R 500</p>
                  <p className="text-lg">per month</p>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            {/* Youth Programs */}
            <Card className="border-2 border-yellow-400 shadow-lg hover:shadow-2xl transition">
              <CardContent className="p-8">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">TECHNO SEED Program</h3>
                <p className="text-lg mb-4 text-gray-700">Comprehensive education for children and teens (Ages 5-18)</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Robotics & AI</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Mathematics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Computer Science</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FlaskConical className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Science Lab</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">After-care & Homework Centre</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Mentorship Program</p>
                  </div>
                </div>
                <div className="bg-purple-600 text-white p-4 rounded-lg mb-4">
                  <p className="text-xl">From</p>
                  <p className="text-3xl font-bold">R 500</p>
                  <p className="text-lg">per month</p>
                </div>
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Apply for 2026
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <p className="text-4xl font-bold mb-2">Ages 5-18</p>
                <p className="text-lg">Youth Programs</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-3" />
                <p className="text-4xl font-bold mb-2">1-2 Months</p>
                <p className="text-lg">Certified Program</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-3" />
                <p className="text-4xl font-bold mb-2">2026</p>
                <p className="text-lg">Applications Open</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Visit Our Campus</h2>
          <Card className="max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Our Location</h3>
                      <p className="text-gray-700">Sunninghill</p>
                      <p className="text-gray-700">6 Kikuyu Rd</p>
                      <p className="text-gray-700">Johannesburg, 2191</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mb-6">
                    <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Contact Us</h3>
                      <a 
                        href="tel:0608828689" 
                        className="text-gray-700 hover:text-green-600 transition"
                      >
                        060 882 8689
                      </a>
                      <p className="text-sm text-gray-600">WhatsApp available</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <Mail className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
                      <a 
                        href="mailto:Zama@mentecfoundationSA.org"
                        className="text-gray-700 hover:text-green-600 transition"
                      >
                        Zama@mentecfoundationSA.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">Website</h3>
                      <a 
                        href="https://www.mentecfoundationSA.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-600 transition"
                      >
                        www.mentecfoundationSA.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>Contact Us on WhatsApp</span>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join OA Academy today and unlock your potential. Whether you're looking to advance your career or give your child a head start in technology, we're here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Apply Now
            </Button>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Schedule a Visit
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">OA Academy</h3>
              <p className="text-gray-400 mb-4">TECHNO SEED - Children & Teens Education</p>
              
              {/* Social Media Links */}
              <div className="flex gap-3 mt-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="https://vm.tiktok.com/ZS9eYdJENm4MK-hvRDk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition bg-white p-1 rounded-full"
                  aria-label="TikTok"
                >
                  <img src={tiktokIcon} alt="TikTok" className="w-7 h-7" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#programs" className="hover:text-green-400 transition">Computer Classes</a></li>
                <li><a href="#programs" className="hover:text-green-400 transition">Youth Programs</a></li>
                <li>
                  <button 
                    onClick={() => setIsDialogOpen(true)}
                    className="hover:text-green-400 transition text-left"
                  >
                    Apply Now
                  </button>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>6 Kikuyu Rd, Sunninghill</li>
                <li>Johannesburg, 2191</li>
                <li>
                  <a href="tel:0608828689" className="hover:text-green-400 transition">
                    060 882 8689
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Zama@mentecfoundationSA.org"
                    className="hover:text-green-400 transition"
                  >
                    Zama@mentecfoundationSA.org
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Visit Us Online</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="https://www.mentecfoundationSA.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a 
                    href="https://vm.tiktok.com/ZS9eYdJENm4MK-hvRDk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 OA Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Apply Now</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for our programs.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="program" className="text-right">
                Program
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.program}
                  onValueChange={(value) => setFormData({ ...formData, program: value })}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Classes">Computer Classes (Adult)</SelectItem>
                    <SelectItem value="TECHNO SEED Program">TECHNO SEED Program (Youth 5-18)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="age" className="text-right">
                Age
              </Label>
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="guardianName" className="text-right">
                Guardian Name
              </Label>
              <Input
                id="guardianName"
                value={formData.guardianName}
                onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="guardianPhone" className="text-right">
                Guardian Phone
              </Label>
              <Input
                id="guardianPhone"
                value={formData.guardianPhone}
                onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mt-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 6h5v2h-5v14h5v2H4v-2h5V6H4V4h16v2z" />
      <path d="M10 10h2v2h-2v-2z" />
      <path d="M10 14h2v2h-2v-2z" />
      <path d="M10 18h2v2h-2v-2z" />
    </svg>
  );
}