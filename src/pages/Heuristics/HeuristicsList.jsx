import React from 'react';
import { Link } from 'react-router-dom';
import { heuristics } from '../../data/heuristics';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ArrowRight } from 'lucide-react';

export default function HeuristicsList() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Usability Heuristics</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    Jakob Nielsen's 10 general principles for interaction design. They are called "heuristics" because they are broad rules of thumb and not specific usability guidelines.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {heuristics.map((heuristic, index) => (
                    <Link key={heuristic.id} to={`/heuristics/${heuristic.id}`} className="block group">
                        <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-black/20">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant="secondary">Heuristic #{index + 1}</Badge>
                                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-black transition-colors" />
                                </div>
                                <CardTitle className="mb-2 text-[18px] font-medium group-hover:text-blue-600 transition-colors">{heuristic.title}</CardTitle>
                                <CardDescription className="line-clamp-2 text-base font-medium text-gray-600">
                                    {heuristic.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
