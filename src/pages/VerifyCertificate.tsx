
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Search, Award, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  // Mock certificate data - in real app, this would come from your database
  const mockCertificates = {
    "DTA-2025-000123": {
      valid: true,
      studentName: "Dr. Sarah Johnson",
      courseName: "Advanced Root Canal Therapy",
      completionDate: "March 15, 2024",
      instructor: "Dr. Michael Chen",
      grade: "Pass with Distinction",
      certificateUrl: "/certificates/DTA-2025-000123.pdf"
    },
    "DTA-2024-000087": {
      valid: true,
      studentName: "Dr. Robert Martinez",
      courseName: "Dental Implant Placement Fundamentals",
      completionDate: "February 8, 2024",
      instructor: "Dr. Emily Rodriguez",
      grade: "Pass",
      certificateUrl: "/certificates/DTA-2024-000087.pdf"
    }
  };

  const handleVerification = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = mockCertificates[certificateId as keyof typeof mockCertificates];
    
    if (result) {
      setVerificationResult(result);
    } else {
      setVerificationResult({ valid: false });
    }
    
    setIsLoading(false);
  };

  const resetVerification = () => {
    setCertificateId("");
    setVerificationResult(null);
  };

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
              <Link to="/verify-certificate" className="text-blue-600 font-medium">Verify Certificate</Link>
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
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificate Verification</h1>
            <p className="text-xl text-muted-foreground">
              Verify the authenticity of certificates issued by Dental Training Academy. 
              Enter the certificate ID to confirm its validity and view details.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enter Certificate ID</CardTitle>
                <CardDescription>
                  Find the certificate ID on your certificate document (format: DTA-YYYY-XXXXXX)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="certificate-id">Certificate ID</Label>
                  <div className="flex gap-2">
                    <Input
                      id="certificate-id"
                      placeholder="e.g., DTA-2025-000123"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                      className="font-mono"
                    />
                    <Button 
                      onClick={handleVerification}
                      disabled={!certificateId || isLoading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                      {isLoading ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                </div>

                {/* Sample IDs for testing */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Sample Certificate IDs for testing:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setCertificateId("DTA-2025-000123")}
                      className="font-mono text-xs"
                    >
                      DTA-2025-000123
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setCertificateId("DTA-2024-000087")}
                      className="font-mono text-xs"
                    >
                      DTA-2024-000087
                    </Button>
                  </div>
                </div>

                {/* Verification Results */}
                {verificationResult && (
                  <div className="mt-8">
                    {verificationResult.valid ? (
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <CardTitle className="text-green-800">Certificate Verified ✓</CardTitle>
                              <CardDescription className="text-green-600">
                                This certificate is authentic and valid
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-green-600" />
                                <div>
                                  <div className="text-sm font-medium text-green-800">Student Name</div>
                                  <div className="text-green-700">{verificationResult.studentName}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Award className="h-4 w-4 text-green-600" />
                                <div>
                                  <div className="text-sm font-medium text-green-800">Course</div>
                                  <div className="text-green-700">{verificationResult.courseName}</div>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-green-600" />
                                <div>
                                  <div className="text-sm font-medium text-green-800">Completion Date</div>
                                  <div className="text-green-700">{verificationResult.completionDate}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-green-600" />
                                <div>
                                  <div className="text-sm font-medium text-green-800">Instructor</div>
                                  <div className="text-green-700">{verificationResult.instructor}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <div className="text-sm font-medium text-green-800 mb-1">Grade Achieved</div>
                            <div className="text-lg font-semibold text-green-700">{verificationResult.grade}</div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100">
                              Download Certificate Copy
                            </Button>
                            <Button onClick={resetVerification} variant="outline">
                              Verify Another Certificate
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="border-red-200 bg-red-50">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                              <XCircle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <CardTitle className="text-red-800">Certificate Not Found</CardTitle>
                              <CardDescription className="text-red-600">
                                The certificate ID you entered could not be verified
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-white p-4 rounded-lg border border-red-200 mb-4">
                            <h4 className="font-medium text-red-800 mb-2">Possible reasons:</h4>
                            <ul className="text-sm text-red-700 space-y-1">
                              <li>• Certificate ID was entered incorrectly</li>
                              <li>• Certificate may have been revoked</li>
                              <li>• Certificate was not issued by Dental Training Academy</li>
                            </ul>
                          </div>
                          <div className="flex gap-2">
                            <Button onClick={resetVerification} variant="outline">
                              Try Again
                            </Button>
                            <Button variant="outline" asChild>
                              <Link to="/contact">Contact Support</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Our Certificate Verification</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Instant Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get immediate verification results with detailed certificate information
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Secure & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our verification system uses secure protocols to ensure certificate authenticity
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>24/7 Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verify certificates anytime, anywhere with our always-available online system
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Verification?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            If you're having trouble verifying a certificate or have questions about the process, 
            our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Email: verify@dentaltraining.com
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

export default VerifyCertificate;
