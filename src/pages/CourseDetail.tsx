import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Users, BookOpen, PlayCircle, CheckCircle, Award, Video, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import EnrollmentButton from "@/components/EnrollmentButton";
import { useEnrollment } from "@/contexts/EnrollmentContext";

const CourseDetail = () => {
  const { id } = useParams();
  const { isEnrolled } = useEnrollment();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock course data - in real app, this would come from your database
  const course = {
    id: parseInt(id || "1"),
    title: "Advanced Root Canal Therapy",
    description: "Master endodontic procedures with hands-on video assignments and expert feedback from leading endodontists. This comprehensive course covers advanced techniques for successful root canal treatment.",
    price: "$299",
    originalPrice: "$399",
    duration: "6 weeks",
    students: 1247,
    rating: 4.8,
    reviews: 156,
    instructor: {
      name: "Dr. Sarah Mitchell",
      title: "Chief of Endodontics",
      credentials: "DDS, MS",
      experience: "15+ years",
      bio: "Dr. Mitchell is a board-certified endodontist with over 15 years of experience in complex root canal procedures.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop",
    level: "Advanced",
    specialty: "Endodontics",
    modules: 12,
    learningOutcomes: [
      "Master advanced irrigation techniques for complex canal systems",
      "Perform successful retreatment procedures",
      "Handle calcified canals with confidence",
      "Manage endodontic emergencies effectively",
      "Apply the latest technology in endodontic treatment"
    ],
    syllabus: [
      {
        module: 1,
        title: "Introduction to Advanced Endodontics",
        duration: "45 minutes",
        topics: ["Complex anatomy", "Treatment planning", "Case selection"],
        assignment: "Case analysis video submission"
      },
      {
        module: 2,
        title: "Advanced Access Cavity Preparation",
        duration: "60 minutes",
        topics: ["Conservative access", "Difficult access cases", "Technology integration"],
        assignment: "Access cavity preparation video"
      },
      {
        module: 3,
        title: "Canal Negotiation Techniques",
        duration: "50 minutes",
        topics: ["Manual techniques", "Rotary systems", "Ultrasonic activation"],
        assignment: "Canal negotiation demonstration"
      },
      {
        module: 4,
        title: "Advanced Irrigation Protocols",
        duration: "55 minutes",
        topics: ["Chemical disinfection", "Sonic irrigation", "Laser activation"],
        assignment: "Irrigation technique video"
      },
      {
        module: 5,
        title: "Complex Shaping Procedures",
        duration: "65 minutes",
        topics: ["Curved canals", "Calcified systems", "Broken instrument removal"],
        assignment: "Complex case shaping video"
      },
      {
        module: 6,
        title: "Obturation Mastery",
        duration: "50 minutes",
        topics: ["Warm vertical technique", "Carrier-based systems", "Quality assessment"],
        assignment: "Obturation technique demonstration"
      }
    ],
    requirements: [
      "Basic endodontic experience",
      "Access to endodontic instruments",
      "Video recording capability",
      "High-speed internet connection"
    ],
    includes: [
      "12 comprehensive video modules",
      "Hands-on video assignments",
      "Personal instructor feedback",
      "Certificate of completion",
      "Lifetime access to materials",
      "Community forum access"
    ]
  };

  const testimonials = [
    {
      name: "Dr. James Wilson",
      text: "This course transformed my endodontic practice. The hands-on video assignments were incredibly valuable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dr. Maria Santos",
      text: "Dr. Mitchell's feedback on my video submissions helped me perfect my technique. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1594824405656-b054d58c5120?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const enrolled = isEnrolled(course.id);

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
              <Link to="/about" className="text-foreground hover:text-blue-600 transition-colors">About</Link>
              <Link to="/verify-certificate" className="text-foreground hover:text-blue-600 transition-colors">Verify Certificate</Link>
              <Link to="/contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link to="/courses" className="text-blue-600 hover:underline text-sm">
                ← Back to Courses
              </Link>
            </div>
            
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="flex items-center gap-2 mb-4">
              <Badge className={`${
                course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {course.level}
              </Badge>
              <Badge variant="outline">{course.specialty}</Badge>
              {enrolled && (
                <Badge className="bg-green-600 text-white">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  You're Enrolled
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
            
            <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{course.rating}</span>
                <span>({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.modules} modules</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <div className="text-center">
                  {course.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">{course.originalPrice}</div>
                  )}
                  <div className="text-3xl font-bold text-blue-600">{course.price}</div>
                  {course.originalPrice && (
                    <Badge className="bg-red-500 text-white mt-2">
                      Save ${parseInt(course.originalPrice.slice(1)) - parseInt(course.price.slice(1))}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolled ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-800 mb-1">You're Enrolled!</h4>
                      <p className="text-sm text-green-700">Access your course content in the dashboard</p>
                    </div>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link to="/dashboard">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <EnrollmentButton 
                      courseId={course.id}
                      courseName={course.title}
                      price={course.price}
                      className="w-full text-lg py-6"
                    />
                    <Button variant="outline" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Wishlist
                    </Button>
                  </>
                )}
                
                <div className="space-y-3 text-sm">
                  <h4 className="font-semibold">This course includes:</h4>
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Outcomes</CardTitle>
                  <CardDescription>What you'll achieve by the end of this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                  <CardDescription>What you need to get started</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Syllabus Tab */}
          <TabsContent value="syllabus" className="space-y-4">
            {course.syllabus.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        Module {module.module}: {module.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <PlayCircle className="h-4 w-4" />
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="h-4 w-4" />
                          Video Assignment
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Module {module.module}</Badge>
                      {enrolled && (
                        <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                          <Link to={`/course/${course.id}/module/${module.module}`}>
                            <PlayCircle className="h-3 w-3 mr-1" />
                            Watch
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Topics Covered:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-1">Hands-on Assignment:</h5>
                      <p className="text-sm text-blue-700">{module.assignment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Instructor Tab */}
          <TabsContent value="instructor">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {course.instructor.title} • {course.instructor.credentials}
                    </p>
                    <p className="text-muted-foreground mb-4">{course.instructor.experience} experience</p>
                    <p className="leading-relaxed">{course.instructor.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500">{course.rating}</div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">{course.reviews} reviews</div>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{testimonial.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDetail;
