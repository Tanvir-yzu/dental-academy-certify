
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Enrollment {
  courseId: number;
  courseName: string;
  enrolledDate: string;
  progress: number;
  status: 'active' | 'completed' | 'paused';
  nextDeadline?: string;
}

interface EnrollmentContextType {
  enrollments: Enrollment[];
  isEnrolled: (courseId: number) => boolean;
  enrollInCourse: (courseId: number, courseName: string) => void;
  updateProgress: (courseId: number, progress: number) => void;
  getEnrollment: (courseId: number) => Enrollment | undefined;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export const EnrollmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([
    {
      courseId: 1,
      courseName: "Advanced Root Canal Therapy",
      enrolledDate: "2025-02-15",
      progress: 75,
      status: "active",
      nextDeadline: "March 20, 2025"
    }
  ]);

  const isEnrolled = (courseId: number): boolean => {
    return enrollments.some(enrollment => enrollment.courseId === courseId);
  };

  const enrollInCourse = (courseId: number, courseName: string): void => {
    if (!isEnrolled(courseId)) {
      const newEnrollment: Enrollment = {
        courseId,
        courseName,
        enrolledDate: new Date().toISOString().split('T')[0],
        progress: 0,
        status: 'active',
        nextDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
      };
      setEnrollments(prev => [...prev, newEnrollment]);
    }
  };

  const updateProgress = (courseId: number, progress: number): void => {
    setEnrollments(prev => 
      prev.map(enrollment => 
        enrollment.courseId === courseId 
          ? { ...enrollment, progress, status: progress === 100 ? 'completed' : 'active' }
          : enrollment
      )
    );
  };

  const getEnrollment = (courseId: number): Enrollment | undefined => {
    return enrollments.find(enrollment => enrollment.courseId === courseId);
  };

  return (
    <EnrollmentContext.Provider value={{
      enrollments,
      isEnrolled,
      enrollInCourse,
      updateProgress,
      getEnrollment
    }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = (): EnrollmentContextType => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within an EnrollmentProvider');
  }
  return context;
};
