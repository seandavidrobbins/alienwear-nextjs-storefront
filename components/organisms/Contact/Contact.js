import Image from "components/atoms/Image";
import cn from "classnames";
import Typewriter from "functions/wordpress/blocks/typewriter.js";
import SVG from "react-inlinesvg";
import styles from "./Contact.module.css";
/**
 * Render the Contact component.
 *
 * @param  {object}  props            Contact component props.
 * @param  {string}  props.image      The Contact image.
 * @param  {string}  props.phone      The Contact phone.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.email      The email.
 * @param  {string}  props.location   The location.
 * @return {Element}                  The Contact component.
 */
export default function Contact({ image, phone, heading, location, email }) {
  return (
    <>
      <div className="flex lg:flex-row flex-col relative h-full w-full">
        <div className="lg:w-1/2 w-full my-8 flex flex-col justify-center items-center px-[5%] lg:order-1 order-2 py-[20px]">
          <div className="w-full font-work-sans text-lg font-regular text-black inline-flex items-center mb-8">
            <SVG
              className="h-7 w-7 cursor-pointer z-10 fill-black mr-4"
              src="/images/icons/phone.svg"
              title="phone"
            />
            <span className="text-xl lg:text-3xl">{phone}</span>
          </div>
          <div
            className={cn(
              "w-full font-work-sans text-lg font-regular text-black inline-flex items-center mb-8"
            )}
          >
            <SVG
              className="h-7 w-7 cursor-pointer z-10 fill-black mr-4"
              src="/images/icons/email.svg"
              title="email"
            />
            <span className="text-xl lg:text-3xl">{email}</span>
          </div>

          <div
            className={cn(
              "w-full font-work-sans text-lg font-regular text-black inline-flex items-center"
            )}
          >
            <SVG
              className="h-7 w-7 cursor-pointer z-10 fill-black mr-4"
              src="/images/icons/location.svg"
              title="location"
            />
            <span className="text-xl lg:text-3xl">{location}</span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:order-2 order-1 overflow-hidden mt-[90px] lg:mt-0 relative">
          {image.url && (
            <Image
              url={image.url}
              alt="Background Image"
              priority
              nextImageFill
              className={cn(
                "relative h-full w-full overflow-hidden",
                styles.image
              )}
            />
          )}
          <div className="absolute top-[40%] left-[38%] lg:top-[50%] z-0 w-full">
            {heading && (
              <Typewriter
                text={heading}
                delay={200}
                className={cn(
                  "font-orbitron text-xl lg:text-4xl uppercase font-regular text-white"
                )}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
