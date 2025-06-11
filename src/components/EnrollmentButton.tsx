
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, CreditCard } from 'lucide-react';
import { useEnrollment } from '@/contexts/EnrollmentContext';
import { useToast } from '@/hooks/use-toast';

interface EnrollmentButtonProps {
  courseId: number;
  courseName: string;
  price: string;
  className?: string;
}

const EnrollmentButton: React.FC<EnrollmentButtonProps> = ({ 
  courseId, 
  courseName, 
  price, 
  className = "" 
}) => {
  const { isEnrolled, enrollInCourse, getEnrollment } = useEnrollment();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const enrolled = isEnrolled(courseId);
  const enrollment = getEnrollment(courseId);

  const handleEnrollment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      enrollInCourse(courseId, courseName);
      setIsProcessing(false);
      setIsDialogOpen(false);
      toast({
        title: "Enrollment Successful!",
        description: `You've successfully enrolled in ${courseName}. Access your course in the dashboard.`,
      });
    }, 2000);
  };

  if (enrolled) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Badge variant="default" className="bg-green-600">
          <CheckCircle className="h-3 w-3 mr-1" />
          Enrolled
        </Badge>
        {enrollment && (
          <span className="text-sm text-muted-foreground">
            Progress: {enrollment.progress}%
          </span>
        )}
      </div>
    );
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-blue-600 hover:bg-blue-700 ${className}`}>
          <CreditCard className="h-4 w-4 mr-2" />
          Enroll Now - {price}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enroll in Course</DialogTitle>
          <DialogDescription>
            Complete your enrollment for {courseName}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Course: {courseName}</h4>
            <p className="text-blue-700 text-sm mb-3">
              You're about to enroll in this comprehensive hands-on training course.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-blue-800">Total:</span>
              <span className="text-2xl font-bold text-blue-600">{price}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-medium">This enrollment includes:</h5>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Full course access and materials
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Video assignment submissions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Personal instructor feedback
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Certificate upon completion
              </li>
            </ul>
          </div>

          <Button 
            onClick={handleEnrollment} 
            disabled={isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Complete Enrollment - {price}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentButton;
