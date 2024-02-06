import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import Head from "next/head";

export const Page = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>{props.seo.title}</title>
        <meta name="desctiption" content={props.seo.metaDesc} />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination.uri}
      />
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
};
