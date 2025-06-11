
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Clock, Users, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Advanced Root Canal Therapy",
      description: "Master endodontic procedures with hands-on video assignments and expert feedback from leading endodontists",
      price: "$299",
      originalPrice: "$399",
      duration: "6 weeks",
      students: 1247,
      rating: 4.8,
      reviews: 156,
      instructor: "Dr. Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=250&fit=crop",
      level: "Advanced",
      specialty: "Endodontics",
      modules: 12,
      featured: true
    },
    {
      id: 2,
      title: "Dental Implant Placement Fundamentals",
      description: "Learn proper implant techniques through practical video demonstrations and case studies",
      price: "$399",
      duration: "8 weeks",
      students: 892,
      rating: 4.9,
      reviews: 203,
      instructor: "Dr. Michael Chen",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop",
      level: "Intermediate",
      specialty: "Oral Surgery",
      modules: 16
    },
    {
      id: 3,
      title: "Cosmetic Veneer Application",
      description: "Perfect your aesthetic dentistry skills with step-by-step video training and case analysis",
      price: "$249",
      duration: "4 weeks",
      students: 634,
      rating: 4.7,
      reviews: 89,
      instructor: "Dr. Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop",
      level: "Beginner",
      specialty: "Cosmetic",
      modules: 8
    },
    {
      id: 4,
      title: "Pediatric Dental Care Techniques",
      description: "Specialized training for treating young patients with confidence and skill",
      price: "$189",
      duration: "5 weeks",
      students: 456,
      rating: 4.6,
      reviews: 67,
      instructor: "Dr. Lisa Park",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      level: "Intermediate",
      specialty: "Pediatric",
      modules: 10
    },
    {
      id: 5,
      title: "Orthodontic Wire Bending Mastery",
      description: "Advanced techniques for custom wire bending and appliance adjustment",
      price: "$349",
      duration: "7 weeks",
      students: 321,
      rating: 4.8,
      reviews: 78,
      instructor: "Dr. James Wilson",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      level: "Advanced",
      specialty: "Orthodontics",
      modules: 14
    },
    {
      id: 6,
      title: "Periodontal Surgery Basics",
      description: "Fundamental surgical techniques for periodontal treatment and maintenance",
      price: "$279",
      duration: "6 weeks",
      students: 567,
      rating: 4.5,
      reviews: 92,
      instructor: "Dr. Maria Santos",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop",
      level: "Intermediate",
      specialty: "Periodontics",
      modules: 11
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
    const matchesSpecialty = selectedSpecialty === "all" || course.specialty.toLowerCase() === selectedSpecialty;
    
    return matchesSearch && matchesLevel && matchesSpecialty;
  });

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
              <Link to="/courses" className="text-blue-600 font-medium">Courses</Link>
              <Link to="/about" className="text-foreground hover:text-blue-600 transition-colors">About</Link>
              <Link to="/verify-certificate" className="text-foreground hover:text-blue-600 transition-colors">Verify Certificate</Link>
              <Link to="/contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Dental Training Courses</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Advance your dental skills with our comprehensive hands-on training programs, 
              taught by industry experts and designed for real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by:</span>
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="endodontics">Endodontics</SelectItem>
                  <SelectItem value="oral surgery">Oral Surgery</SelectItem>
                  <SelectItem value="cosmetic">Cosmetic</SelectItem>
                  <SelectItem value="pediatric">Pediatric</SelectItem>
                  <SelectItem value="orthodontics">Orthodontics</SelectItem>
                  <SelectItem value="periodontics">Periodontics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Available
            </h2>
            <Select defaultValue="popular">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={`${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.level}
                    </Badge>
                    {course.featured && (
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    )}
                  </div>
                  {course.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      Save ${parseInt(course.originalPrice.slice(1)) - parseInt(course.price.slice(1))}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-muted-foreground">({course.reviews} reviews)</span>
                    </div>
                    <div className="text-right">
                      {course.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">{course.originalPrice}</div>
                      )}
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                    <Link to={`/course/${course.id}`}>
                      {course.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()} students
                      </div>
                    </div>
                    <div className="text-sm">
                      <strong>Instructor:</strong> {course.instructor}
                    </div>
                    <div className="text-sm">
                      <strong>Modules:</strong> {course.modules} • <strong>Specialty:</strong> {course.specialty}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="w-full space-y-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/course/${course.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLevel("all");
                  setSelectedSpecialty("all");
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our education specialists to discuss custom training solutions for your practice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Custom Training
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Support
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

export default Courses;
