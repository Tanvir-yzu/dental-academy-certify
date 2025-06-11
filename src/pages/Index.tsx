
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Award, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced Root Canal Therapy",
      description: "Master endodontic procedures with hands-on video assignments and expert feedback",
      price: "$299",
      duration: "6 weeks",
      students: 1247,
      rating: 4.8,
      instructor: "Dr. Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Dental Implant Placement Fundamentals",
      description: "Learn proper implant techniques through practical video demonstrations",
      price: "$399",
      duration: "8 weeks", 
      students: 892,
      rating: 4.9,
      instructor: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Cosmetic Veneer Application",
      description: "Perfect your aesthetic dentistry skills with step-by-step video training",
      price: "$249",
      duration: "4 weeks",
      students: 634,
      rating: 4.7,
      instructor: "Dr. Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop",
      level: "Beginner"
    }
  ];

  const features = [
    {
      icon: <Play className="h-8 w-8 text-blue-600" />,
      title: "Video-Based Learning",
      description: "Submit hands-on procedure videos and receive detailed feedback from expert instructors"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from board-certified dentists with years of clinical and teaching experience"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Verifiable Certificates",
      description: "Earn industry-recognized certificates with unique verification codes and QR authentication"
    }
  ];

  const testimonials = [
    {
      name: "Dr. James Wilson",
      text: "The hands-on video assignments helped me perfect my technique. The instructor feedback was invaluable.",
      course: "Advanced Root Canal Therapy",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Dr. Lisa Park",
      text: "Outstanding platform! The certificate verification system adds real credibility to my credentials.",
      course: "Dental Implant Placement",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">Dental Training Academy</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/courses" className="text-foreground hover:text-blue-600 transition-colors">Courses</Link>
              <Link to="/about" className="text-foreground hover:text-blue-600 transition-colors">About</Link>
              <Link to="/verify-certificate" className="text-foreground hover:text-blue-600 transition-colors">Verify Certificate</Link>
              <Link to="/contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Trusted by 5,000+ Dental Professionals
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Master Dental Procedures with 
                <span className="text-blue-600"> Hands-On Training</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Learn from expert dentists through video-based assignments, receive personalized feedback, 
                and earn verifiable certificates that advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Learning Today
                </Button>
                <Button variant="outline" size="lg">
                  Browse Courses
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Video homework review
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Expert instructor feedback
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Verified certificates
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop" 
                alt="Dental training in progress"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">2,847 Certificates Issued</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the most effective way to learn dental procedures through hands-on video training
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground">
              Master essential dental procedures with our most popular training programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-foreground">
                    {course.level}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-muted-foreground">({course.students} students)</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      By {course.instructor}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how our training has transformed dental careers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.course}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Dental Skills?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of dental professionals who have enhanced their practice through our hands-on training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse All Courses
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Schedule a Demo
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

export default Index;
