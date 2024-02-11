import Image from "components/atoms/Image";
import cn from "classnames";
import Typewriter from "functions/wordpress/blocks/typewriter.js";
import styles from "./About.module.css";
import RichText from "components/atoms/RichText";
/**
 * Render the Contact component.
 *
 * @param  {object}  props            About component props.
 * @param  {string}  props.image      The About image.
 * @param  {string}  props.subheading The About subheading.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.content    The content.
 * @param  {string}  props.skills     The skills.
 * @return {Element}                  The About component.
 */
export default function About({ image, subheading, heading, content, skills }) {
  return (
    <>
      <div className="flex lg:flex-row flex-col relative h-full w-full">
        <div className="lg:w-1/2 w-full m-4 lg:m-8 flex flex-col justify-center items-center lg:order-1 order-2 lg:px-0 lg:pr-[75px]">
          <div className="w-full font-work-sans text-lg font-regular text-black inline-flex items-center mb-8">
            <RichText tag="h3" className="text-5xl !pl-0">
              {heading}
            </RichText>
          </div>
          <div
            className={cn(
              "w-full font-work-sans text-lg font-regular text-black inline-flex items-center mb-8"
            )}
          >
            <RichText className="text-3xl !pl-0 pr-12">{skills}</RichText>
          </div>
          <div
            className={cn(
              "w-full font-work-sans text-lg font-regular text-black inline-flex items-center"
            )}
          >
            <RichText tag="h3" className="text-3xl !pl-0">
              {subheading}
            </RichText>
          </div>
          <div
            className={cn(
              "w-full font-work-sans text-lg font-regular text-black inline-flex items-center"
            )}
          >
            <RichText className="text-3xl pr-12">{content}</RichText>
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
          <div className="absolute top-[22%] left-0 px-4 lg:px-8 lg:top-[45%] z-0 whitespace-normal">
            {heading && (
              <Typewriter
                text={heading}
                delay={100}
                className={cn(
                  "font-orbitron text-2xl lg:text-4xl uppercase font-regular text-white"
                )}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
