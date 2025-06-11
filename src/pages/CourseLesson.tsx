
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, BookOpen, FileText, Download, CheckCircle, Play } from 'lucide-react';
import VideoPlayer from '@/components/VideoPlayer';
import { useEnrollment } from '@/contexts/EnrollmentContext';
import { useToast } from '@/hooks/use-toast';

const CourseLesson = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const { updateProgress } = useEnrollment();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("video");

  // Mock course data - in real app, this would come from your database
  const courseData = {
    id: parseInt(courseId || "1"),
    title: "Advanced Root Canal Therapy",
    modules: [
      {
        id: 1,
        title: "Introduction to Advanced Endodontics",
        duration: "45 minutes",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Welcome to advanced endodontics. In this module, we'll cover complex anatomy, treatment planning, and case selection for advanced procedures.",
        materials: [
          { name: "Module 1 Slides", type: "PDF", url: "#" },
          { name: "Case Study Templates", type: "PDF", url: "#" },
          { name: "Anatomy Reference", type: "PDF", url: "#" }
        ],
        assignment: {
          title: "Case Analysis Video Submission",
          description: "Record a 3-5 minute video analyzing the provided case study using the principles covered in this module.",
          dueDate: "March 25, 2025"
        },
        completed: false
      },
      {
        id: 2,
        title: "Advanced Access Cavity Preparation",
        duration: "60 minutes",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "Learn conservative access techniques and handle difficult access cases with advanced technology integration.",
        materials: [
          { name: "Access Cavity Guide", type: "PDF", url: "#" },
          { name: "Instrument Reference", type: "PDF", url: "#" }
        ],
        assignment: {
          title: "Access Cavity Preparation Video",
          description: "Demonstrate your access cavity preparation technique on a provided case.",
          dueDate: "March 30, 2025"
        },
        completed: false
      }
    ]
  };

  const currentModuleIndex = courseData.modules.findIndex(m => m.id === parseInt(moduleId || "1"));
  const currentModule = courseData.modules[currentModuleIndex];
  const previousModule = currentModuleIndex > 0 ? courseData.modules[currentModuleIndex - 1] : null;
  const nextModule = currentModuleIndex < courseData.modules.length - 1 ? courseData.modules[currentModuleIndex + 1] : null;

  const handleVideoComplete = () => {
    // Mark module as completed and update progress
    const newProgress = Math.min(100, ((currentModuleIndex + 1) / courseData.modules.length) * 100);
    updateProgress(courseData.id, Math.round(newProgress));
    
    toast({
      title: "Module Completed!",
      description: `You've completed "${currentModule.title}". Great progress!`,
    });
  };

  if (!currentModule) {
    return <div>Module not found</div>;
  }

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
              <Link to="/dashboard" className="text-foreground hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/courses" className="text-foreground hover:text-blue-600 transition-colors">Courses</Link>
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <span>/</span>
            <Link to={`/course/${courseId}`} className="hover:text-blue-600">{courseData.title}</Link>
            <span>/</span>
            <span className="text-foreground">Module {currentModule.id}</span>
          </nav>
        </div>

        {/* Course Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{currentModule.title}</h1>
            <p className="text-muted-foreground">Module {currentModule.id} of {courseData.modules.length}</p>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Play className="h-4 w-4 mr-2" />
            {currentModule.duration}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <VideoPlayer
              videoUrl={currentModule.videoUrl}
              title={currentModule.title}
              duration={currentModule.duration}
              onComplete={handleVideoComplete}
              isCompleted={currentModule.completed}
            />

            {/* Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="video">Overview</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="assignment">Assignment</TabsTrigger>
              </TabsList>

              <TabsContent value="video" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">{currentModule.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="materials" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Materials</CardTitle>
                    <CardDescription>Download resources for this module</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {currentModule.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">{material.name}</div>
                              <div className="text-sm text-muted-foreground">{material.type}</div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assignment" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Module Assignment</CardTitle>
                    <CardDescription>Complete this assignment to proceed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">{currentModule.assignment.title}</h4>
                      <p className="text-muted-foreground mb-4">{currentModule.assignment.description}</p>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-orange-800">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">Due: {currentModule.assignment.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Submit Assignment
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Navigation */}
            <div className="flex justify-between">
              {previousModule ? (
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/course/${courseId}/module/${previousModule.id}`)}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous: {previousModule.title}
                </Button>
              ) : (
                <div></div>
              )}
              
              {nextModule ? (
                <Button 
                  onClick={() => navigate(`/course/${courseId}/module/${nextModule.id}`)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next: {nextModule.title}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete Course
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {courseData.modules.map((module, index) => (
                    <div
                      key={module.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        module.id === currentModule.id
                          ? 'bg-blue-50 border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => navigate(`/course/${courseId}/module/${module.id}`)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-sm">Module {module.id}</div>
                          <div className="text-xs text-muted-foreground truncate">{module.title}</div>
                          <div className="text-xs text-muted-foreground">{module.duration}</div>
                        </div>
                        {module.completed && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
