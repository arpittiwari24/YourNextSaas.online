"use client";

import React from "react";
import { useInView } from "framer-motion";
import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  const reviews = [
    {
      name: "jonny sins",
      username: "@daddy-jonny",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "emily willis",
      username: "@emily",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem i.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "danny d",
      username: "@daddy-danny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "rae ill black",
      username: "@rae",
      body: "The design and functionality are top-notch. I’m really impressed.",
      img: "https://avatar.vercel.sh/emily",
    },
    {
      name: "angela white",
      username: "@angela",
      body: "This has completely exceeded my expectations. Highly recommended.",
      img: "https://avatar.vercel.sh/michael",
    },
    {
      name: "jessica starling",
      username: "@jessica",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jessica",
    },
  ];

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.figure
        ref={ref}
        className={cn(
          "relative h-60 w-60 cursor-pointer overflow-hidden rounded-xl border border-dashed p-5 dark:border-white border-black "
        )}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt={`${name}'s profile`}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm dark:text-gray-300">
          {body}
        </blockquote>
      </motion.figure>
    );
  };

  return (
    <div className="relative flex h-[500px] w-full flex-row items-center sm:justify-between justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee reverse vertical className="[--duration:30s] hidden md:flex">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:25s] hidden md:flex">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse vertical className="[--duration:20s] hidden sm:flex">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
