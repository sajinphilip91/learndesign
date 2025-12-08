import React from 'react';
import { Link } from 'react-router-dom';
import { laws } from '../../data/laws';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight, Scale } from 'lucide-react';

export default function LawsList() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">UX Laws & Principles</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    Psychological principles that describe how users perceive and interact with digital interfaces.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {laws.map((law, index) => (
                    <Link key={law.id} to={`/laws/${law.id}`} className="block group">
                        <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-black/20">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                                        Law #{index + 1}
                                    </Badge>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-black transition-colors" />
                                </div>
                                <CardTitle className="mb-2 group-hover:text-purple-700 transition-colors flex items-center gap-2">
                                    <Scale className="w-5 h-5 text-purple-500" />
                                    {law.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {law.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
