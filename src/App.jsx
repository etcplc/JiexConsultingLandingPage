import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { ErrorBoundary } from './ErrorBoundary';

const HeroSection  = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const JobSection   = lazy(() => import('./components/JobSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      }>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <JobSection />
        <ContactSection />
      </Suspense>
    </ErrorBoundary>
  );
}
