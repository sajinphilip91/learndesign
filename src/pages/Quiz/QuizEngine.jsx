import React, { useState } from 'react';
import { quizQuestions } from '../../data/quiz';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Trophy, RefreshCw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizEngine() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleOptionSelect = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        setIsAnswered(true);
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowResult(false);
    };

    if (showResult) {
        return (
            <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-500">
                <Card className="border-2 border-purple-100 bg-white/50 backdrop-blur-sm">
                    <CardContent className="pt-12 pb-12 space-y-6">
                        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Trophy className="w-12 h-12 text-yellow-600" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">Quiz Completed!</h2>
                        <p className="text-xl text-gray-600">
                            You scored <span className="font-bold text-purple-600">{score}</span> out of <span className="font-bold">{quizQuestions.length}</span>
                        </p>
                        <div className="flex justify-center gap-4 pt-4">
                            <Button onClick={restartQuiz} className="gap-2">
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Knowledge Check</h1>
                <p className="text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </p>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                    />
                </div>
            </div>

            <Card className="overflow-hidden">
                <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-8">
                    <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div className="grid gap-3">
                        {currentQuestion.options.map((option, index) => {
                            let stateStyle = "border-gray-200 hover:border-purple-300 hover:bg-purple-50";
                            if (isAnswered) {
                                if (index === currentQuestion.correctAnswer) {
                                    stateStyle = "border-green-500 bg-green-50 text-green-900";
                                } else if (index === selectedOption) {
                                    stateStyle = "border-red-500 bg-red-50 text-red-900";
                                } else {
                                    stateStyle = "opacity-50";
                                }
                            } else if (selectedOption === index) {
                                stateStyle = "border-purple-600 bg-purple-50 ring-1 ring-purple-600";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${stateStyle}`}
                                >
                                    <span className="font-medium">{option}</span>
                                    {isAnswered && index === currentQuestion.correctAnswer && (
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    )}
                                    {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                                        <XCircle className="w-5 h-5 text-red-600" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <AnimatePresence>
                        {isAnswered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="bg-blue-50 p-4 rounded-lg text-blue-800 text-sm mt-4"
                            >
                                <p className="font-semibold mb-1">Explanation:</p>
                                {currentQuestion.explanation}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                {!isAnswered ? (
                    <Button
                        onClick={handleSubmit}
                        disabled={selectedOption === null}
                        className="w-full md:w-auto"
                    >
                        Check Answer
                    </Button>
                ) : (
                    <Button onClick={handleNext} className="w-full md:w-auto gap-2">
                        {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
