"use client";

// LIBS
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import ContactForm from "~/components/forms/contactForm";
import { Button } from "~/components/ui/button";
import ChevronDown from "../components/svgs/ChevronDown";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        // Hero Row Container
        className="hero relative grid min-h-[90vh] w-full grid-cols-1 items-center justify-items-center sm:grid-cols-7 sm:grid-rows-5"
        style={{
          backgroundImage: `url(/clippers.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-primary/40 mix-blend-multiply" />
        <div className="absolute left-0 top-0 h-full w-full bg-black/30 mix-blend-multiply" />
        <div
          // Hero Card
          className="z-10 flex h-2/3 flex-col items-center justify-center rounded-lg bg-black/60 p-10 sm:col-span-5 sm:col-start-3 sm:row-span-5"
        >
          <Link href="./#about">
            <h1 className="text-center text-5xl">Veronica Penn</h1>
          </Link>
          <div className="p-2" />
          <div className="text-center text-2xl">
            Haircutting services, tailored to your unique style
          </div>
          <div className="p-4" />
          {/* <Link href="/#services">
            <div className="hover:text-success cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105">
              Services
            </div>
          </Link> */}
          {/* <div className="p-1" />
          <Link href="/#gallery">
            <div className="hover:text-success cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105">
              Gallery
            </div>
          </Link> */}
          {/* <div className="p-1" /> */}
          {/* <Link href="/#about">
            <div className="hover:text-success cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105">
              About Me
            </div>
          </Link> */}
          <div className="p-4" />
          <div className="flex w-full justify-around">
            <Link href="/#about">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="text-lg font-bold lowercase tracking-widest"
              >
                About Me
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="text-lg font-bold lowercase tracking-widest"
              >
                Send Me A Message
              </Button>
            </Link>
          </div>
        </div>

        <Link
          // Scroll down chevron
          href="./#about"
          className="absolute bottom-5 left-[50%-1.5rem] z-10 h-12 w-12 cursor-pointer text-6xl transition ease-linear hover:h-14 hover:w-14 hover:-translate-y-1 hover:scale-105"
          passHref
        >
          <ChevronDown className="hover:fill-success fill-foreground" />
        </Link>
      </div>

      {/* <div
        // Services Row Container
        id="services"
        className="bg-base-100 grid min-w-full grid-cols-1 justify-items-center px-8 py-20 lg:grid-cols-2 xl:grid-cols-7"
      >
        <div
          className="relative max-w-xs lg:max-w-xs xl:col-span-2 xl:col-start-2"
          // className="max-w-xs rounded-lg bg-center shadow-xl lg:max-w-xs xl:col-span-2 xl:col-start-2"
        >
          <Image
            alt="Selfie"
            className="rounded-lg shadow-xl"
            src="/bg1.jpg"
            // placeholder="blur"
            sizes="(max-width: 640px) 100vw, 640px"
            width={640}
            height={480}
          />
        </div>
        <div
          // Text box container
          className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-3"
        >
          <div className="flex flex-col">
            <h3 className="text-center text-4xl lowercase tracking-wider">
              {`Services`}
            </h3>
            <div className="p-4" />
            <p className="text-base">
              {`Quick section about your services. This is where you can talk about what you offer and why you're the best at it.`}
            </p>
          </div>
        </div>
      </div>

      {/*
       ***    Gallery Row container
       */}
      {/*
      <div
        id="gallery"
        className="grid min-w-full grid-cols-1 justify-items-center bg-primary/50 px-8 py-20 lg:grid-cols-2 lg:px-24 xl:px-40"
      >
        <div
          className="relative max-w-xs lg:col-start-2 lg:row-start-1 lg:max-w-xs"
          // className="max-w-xs rounded-lg bg-center shadow-xl lg:max-w-xs xl:col-span-2 xl:col-start-2"
        >
          <Image
            alt="Selfie"
            className="rounded-lg shadow-xl"
            src="/bg1.jpg"
            // placeholder="blur"
            sizes="(max-width: 640px) 100vw, 640px"
            width={480}
            height={720}
          />
        </div>
        <div
          // Text box container
          className="mt-10 max-w-md rounded-md bg-black/60 p-10 lg:col-start-1 lg:row-start-1 lg:mt-0"
        >
          <div className="flex flex-col">
            <h3 className="text-center text-4xl lowercase tracking-wider">
              Gallery / Portfolio
            </h3>
            <div className="p-3" />
            <p className="text-base">
              This is where you can show off your work. Once you send over
              pictures of your work, I can make a nice gallery for you to show
              off your work.
            </p>
            <div className="p-1" />
            <p className="text-base">
              Which sounds better to you? Gallery / Porfolio ?
            </p>
          </div>
        </div>
      </div> */}

      {/*
       ***    About Row container
       */}
      <div
        id="about"
        className="grid min-w-full grid-cols-1 justify-items-center bg-background px-8 py-20 lg:grid-cols-2 xl:grid-cols-9"
      >
        <div className="relative m-auto max-w-xs lg:max-w-lg xl:col-span-4 xl:col-start-2 xl:mr-20">
          <Image
            alt="Selfie"
            className="rounded-lg shadow-xl"
            src="/bg1.jpg"
            sizes="(max-width: 1024px) 100vw, 1024px"
            width={1024}
            height={602}
          />
        </div>
        <div
          // Text box container
          className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-4 xl:mr-24"
        >
          <div className="flex flex-col">
            <h3 className="text-center text-4xl">About Me</h3>
            <div className="p-3" />
            <p className="text-base">
              I’m Veronica Penn, a 2012 Century College beauty school graduate
              with 10+ years of styling men’s and women’s hair. I have always
              been creative and a social person which is what naturally led me
              down this path as a Stylist/Barber.
            </p>
            <br />
            <p className="text-base">
              I am committed to providing the best service possible to all
              clients. One of my passions is executing a foil shaver fade with
              texture on top. I take pride in giving the confidence and ability
              to express yourself with a cut tailored to you.
            </p>
          </div>
        </div>
      </div>

      {/*
       ***    Contact Row container
       */}
      <div
        id="contact"
        className="flex min-w-full flex-col items-center justify-center bg-primary/50 p-20"
      >
        <div
          // Text box container
          className="max-w-[70vw] rounded-lg bg-black/50 p-12"
        >
          <div className="grid-col-1 grid justify-items-center gap-10 lg:grid-cols-2">
            <div className="flex max-w-lg flex-col">
              <h2 className="mb-10 text-center text-4xl">{`Get In Touch`}</h2>
              <div className="p-2" />
              <p className="text-base">
                We’d love to help you achieve the perfect look! Whether you’re
                in need of a fresh cut, vibrant color, or a complete makeover,
                VP Barbershop is here for you.
              </p>
              <br />
              <p className="text-base">
                To book an appointment or for any inquiries, please don’t
                hesitate to reach out.
              </p>
              <br />
              <p className="text-base">
                Contact me today and let’s bring out the best in your hair!
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
