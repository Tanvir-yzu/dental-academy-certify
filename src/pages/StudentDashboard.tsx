
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Upload, Award, Clock, PlayCircle, CheckCircle, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEnrollment } from "@/contexts/EnrollmentContext";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const { enrollments } = useEnrollment();

  // Convert enrollments to the expected format
  const enrolledCourses = enrollments.map(enrollment => ({
    id: enrollment.courseId,
    title: enrollment.courseName,
    progress: enrollment.progress,
    modules: 12, // Default value, could be dynamic
    completedModules: Math.floor((enrollment.progress / 100) * 12),
    instructor: "Dr. Sarah Mitchell", // Default value, could be dynamic
    nextDeadline: enrollment.nextDeadline,
    status: enrollment.status,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop"
  }));

  const pendingAssignments = [
    {
      id: 1,
      courseTitle: "Advanced Root Canal Therapy",
      moduleName: "Module 10: Complex Case Management",
      dueDate: "March 20, 2025",
      type: "Video Submission",
      description: "Submit a 5-minute video demonstrating your approach to a multi-rooted molar with calcified canals"
    },
    {
      id: 2,
      courseTitle: "Advanced Root Canal Therapy",
      moduleName: "Module 11: Post-Treatment Care",
      dueDate: "March 25, 2025",
      type: "Video Submission",
      description: "Record patient post-treatment instructions and follow-up protocol demonstration"
    }
  ];

  const submittedWork = [
    {
      id: 1,
      courseTitle: "Advanced Root Canal Therapy",
      moduleName: "Module 9: Irrigation Techniques",
      submittedDate: "March 10, 2025",
      status: "Graded",
      grade: "95%",
      feedback: "Excellent technique demonstration. Your irrigation protocol shows mastery of the concepts."
    },
    {
      id: 2,
      courseTitle: "Cosmetic Veneer Application",
      moduleName: "Module 8: Final Case Presentation",
      submittedDate: "February 12, 2025",
      status: "Graded",
      grade: "92%",
      feedback: "Outstanding aesthetic results. Consider minor adjustments to shade matching protocol."
    }
  ];

  const certificates = [
    {
      id: "DTA-2025-000156",
      courseTitle: "Cosmetic Veneer Application",
      issuedDate: "February 15, 2025",
      instructor: "Dr. Emily Rodriguez",
      finalGrade: "Pass with Distinction"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Button variant="outline" size="sm">Settings</Button>
              <Button size="sm" variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Johnson!</h1>
          <p className="text-muted-foreground">Continue your learning journey and track your progress</p>
          
          {enrolledCourses.length === 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Start Your Learning Journey</h3>
              <p className="text-blue-700 mb-4">
                You haven't enrolled in any courses yet. Browse our catalog to find the perfect training for your needs.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/courses">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
            </div>
          )}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* My Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="md:flex">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full md:w-48 h-32 md:h-auto object-cover"
                    />
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <p className="text-muted-foreground">Instructor: {course.instructor}</p>
                        </div>
                        <Badge variant={course.status === "completed" ? "default" : "secondary"}>
                          {course.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.completedModules}/{course.modules} modules</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {course.status === "completed" ? (
                            <span>Completed</span>
                          ) : (
                            <span>Next deadline: {course.nextDeadline}</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/course/${course.id}`}>
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Continue Learning
                            </Link>
                          </Button>
                          {course.status === "completed" && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <Award className="h-4 w-4 mr-2" />
                              View Certificate
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <div className="grid gap-4">
              {pendingAssignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{assignment.moduleName}</CardTitle>
                        <CardDescription>{assignment.courseTitle}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        <Clock className="h-3 w-3 mr-1" />
                        Due: {assignment.dueDate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{assignment.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{assignment.type}</Badge>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Assignment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submissions" className="space-y-6">
            <div className="grid gap-4">
              {submittedWork.map((submission) => (
                <Card key={submission.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{submission.moduleName}</CardTitle>
                        <CardDescription>{submission.courseTitle}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {submission.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          Submitted: {submission.submittedDate}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-green-600">{submission.grade}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Instructor Feedback:</h4>
                      <p className="text-muted-foreground">{submission.feedback}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid gap-4">
              {certificates.map((certificate) => (
                <Card key={certificate.id} className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Award className="h-5 w-5 text-green-600" />
                          {certificate.courseTitle}
                        </CardTitle>
                        <CardDescription>Certificate ID: {certificate.id}</CardDescription>
                      </div>
                      <Badge className="bg-green-600">
                        {certificate.finalGrade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm font-medium text-green-800">Issued Date</div>
                        <div className="text-green-700">{certificate.issuedDate}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-800">Instructor</div>
                        <div className="text-green-700">{certificate.instructor}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100">
                        <FileText className="h-4 w-4 mr-2" />
                        Share Verification Link
                      </Button>
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

export default StudentDashboard;
