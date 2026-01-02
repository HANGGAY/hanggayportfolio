'use client';

import React from 'react';
import {
  Card as MT_Card,
  Typography as MT_Typography,
} from '@material-tailwind/react';
const Card = MT_Card as any;

const Typography = MT_Typography as any;

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>

      <Typography className="w-full font-normal text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
