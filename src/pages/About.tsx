
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, BookOpen, Target, Heart, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const instructors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief of Endodontics",
      credentials: "DDS, MS",
      experience: "15+ years",
      specialties: ["Root Canal Therapy", "Endodontic Surgery"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Mitchell is a board-certified endodontist with over 15 years of experience in complex root canal procedures."
    },
    {
      name: "Dr. Michael Chen",
      title: "Oral Surgery Specialist",
      credentials: "DDS, OMFS",
      experience: "12+ years",
      specialties: ["Dental Implants", "Oral Surgery"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      bio: "Specializing in dental implant placement and complex oral surgical procedures with a focus on patient comfort."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Cosmetic Dentistry Expert",
      credentials: "DDS, AACD",
      experience: "10+ years",
      specialties: ["Cosmetic Veneers", "Smile Design"],
      image: "https://images.unsplash.com/photo-1594824405656-b054d58c5120?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Rodriguez is an accredited member of the American Academy of Cosmetic Dentistry with extensive experience in aesthetic procedures."
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence in Education",
      description: "We maintain the highest standards in dental education, ensuring every course meets rigorous quality benchmarks."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Student-Centered Approach",
      description: "Every aspect of our platform is designed with the student experience in mind, from course structure to support."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Compassionate Care",
      description: "We believe in training dentists who not only excel technically but also provide compassionate patient care."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safety & Ethics",
      description: "All our training emphasizes the highest safety standards and ethical practices in dental treatment."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Students Trained" },
    { number: "95%", label: "Completion Rate" },
    { number: "2,847", label: "Certificates Issued" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-blue-600">Dental Training Academy</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/courses" className="text-foreground hover:text-blue-600 transition-colors">Courses</Link>
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/verify-certificate" className="text-foreground hover:text-blue-600 transition-colors">Verify Certificate</Link>
              <Link to="/contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Founded in 2020
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforming Dental Education Through 
                <span className="text-blue-600"> Hands-On Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're pioneering the future of dental education by combining expert instruction 
                with practical, video-based learning that prepares dentists for real-world success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/courses">Explore Our Courses</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop" 
                alt="Dental training session"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-muted-foreground">
                Dedicated to advancing dental care through innovative education
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize dental education by providing accessible, high-quality, 
                    hands-on training that bridges the gap between theoretical knowledge and 
                    practical application, ultimately improving patient care worldwide.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the global leader in hands-on dental education, where every 
                    dental professional has access to world-class training that enhances 
                    their skills and confidence in delivering exceptional patient care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-muted-foreground">
              Learn from board-certified professionals with years of clinical experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-foreground">
                      {instructor.experience}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {instructor.title} • {instructor.credentials}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{instructor.bio}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            </div>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                Dental Training Academy was founded in 2020 by a group of passionate dental educators 
                who recognized a critical gap in practical, hands-on training for dental professionals. 
                Traditional dental education often fell short in preparing practitioners for the 
                real-world challenges they would face in their careers.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our founders, all practicing dentists with decades of combined experience, envisioned 
                a platform where learning could be both accessible and intensely practical. They 
                pioneered the concept of video-based homework submissions, allowing students to 
                practice procedures and receive personalized feedback from expert instructors.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we've trained over 5,000 dental professionals worldwide, maintaining a 95% 
                course completion rate and consistently high satisfaction scores. Our commitment to 
                excellence in education and innovation in teaching methods continues to set us apart 
                as a leader in dental continuing education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Skills?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of dental professionals who have enhanced their practice through our 
            comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dental Training Academy</h3>
              <p className="text-gray-400 mb-4">
                Advancing dental education through hands-on video training and expert instruction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link to="/courses?level=beginner" className="hover:text-white transition-colors">Beginner</Link></li>
                <li><Link to="/courses?level=advanced" className="hover:text-white transition-colors">Advanced</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/verify-certificate" className="hover:text-white transition-colors">Verify Certificate</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dental Training Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
