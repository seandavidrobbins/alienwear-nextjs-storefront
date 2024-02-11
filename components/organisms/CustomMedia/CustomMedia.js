import Image from "components/atoms/Image";
import RichText from "components/atoms/RichText";
import cn from "classnames";
import ReactPlayer from "react-player";
import Typewriter from "functions/wordpress/blocks/typewriter.js";

/**
 * Render the CustomMedia component.
 *
 * @param  {object}  props            CustomMedia component props.
 * @param  {string}  props.image      The CustomMedia image.
 * @param  {string}  props.video      The CustomMedia video.
 * @param  {string}  props.heading    The heading.
 * @param  {string}  props.subheading The subheading.
 * @param  {string}  props.content    The content.
 * @return {Element}                  The CustomMedia component.
 */
export default function CustomMedia({
  image,
  video,
  heading,
  subheading,
  content,
}) {
  if (video) {
    return (
      <>
        <div
          className={cn(
            "relative left-0 top-0 h-[400px] w-full [&>div>video]:object-contain [&>div>video]:object-center bg-seafoam align-baseline"
          )}
        >
          <div className="w-full">
            {heading && <Typewriter text={heading} delay={300} />}
            <RichText className="pb-8 font-rajdhani text-6xl font-regular">
              {subheading}
            </RichText>
            <RichText className="w-full font-work-sans text-lg font-regular text-white lg:w-1/3  ">
              {content}
            </RichText>
          </div>
          <div className="mt-[10%]">
            <ReactPlayer
              playing
              muted
              url={video}
              className="video:max-w-none video:xl:!w-full absolute max-w-full overflow-hidden xl:!w-full "
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={cn("relative h-full w-full")}>
        <div className="absolute top-[50%] left-[38%] z-20 w-full">
          {heading && (
            <Typewriter
              text={heading}
              delay={200}
              className={cn(
                "font-orbitron text-lg lg:text-4xl uppercase font-regular text-white"
              )}
            />
          )}

          <RichText
            className={cn(
              "pb-8 font-rajdhani text-6xl font-regular text-green"
            )}
          >
            {subheading}
          </RichText>
          <RichText
            className={cn(
              "w-full font-work-sans text-lg font-regular text-white lg:w-1/3"
            )}
          >
            {content}
          </RichText>
        </div>
        {image.url && (
          <Image
            url={image.url}
            alt="Background Image"
            priority
            nextImageFill
            className={cn("relative h-full w-full overflow-hidden")}
          />
        )}
      </div>
    </>
  );
}
