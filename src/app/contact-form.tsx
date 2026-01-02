'use client';

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { cv } from '../../data/cv';

export function ContactForm() {
  const { profile } = cv;

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-6/12 !text-gray-500"
        >
          Interested in collaborating or discussing IT solutions? Feel free to
          reach out — I&apos;ll respond as soon as possible.
        </Typography>
      </div>

      <Card shadow={true} className="container mx-auto border border-gray/50">
        <CardBody className="grid grid-cols-1 lg:grid-cols-7 gap-10">
          {/* LEFT – CONTACT INFO */}
          <div className="col-span-3 rounded-lg py-10 px-6 md:px-12 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography variant="small" className="mb-8 !text-gray-400">
              {profile.title}
            </Typography>

            <div className="flex items-center gap-4 mb-4">
              <PhoneIcon className="h-5 w-5 text-white" />
              <Typography color="white">{profile.phone}</Typography>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <EnvelopeIcon className="h-5 w-5 text-white" />
              <Typography color="white">{profile.email}</Typography>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <MapPinIcon className="h-5 w-5 text-white" />
              <Typography color="white">{profile.location}</Typography>
            </div>

            <div className="flex items-center gap-4">
              <IconButton
                variant="text"
                color="white"
                onClick={() => window.open(profile.github, '_blank')}
              >
                <i className="fa-brands fa-github text-lg" />
              </IconButton>

              <IconButton
                variant="text"
                color="white"
                onClick={() => window.open(profile.linkedin, '_blank')}
              >
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="col-span-4 px-2 md:px-10">
            <form>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="First Name"
                />
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Last Name"
                />
              </div>

              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Email"
                className="mb-6"
              />

              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Your Message"
                className="mb-6"
              />

              <div className="flex justify-end">
                <Button color="gray">Send Message</Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
