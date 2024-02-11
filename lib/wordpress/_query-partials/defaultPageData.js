import allMenus from "./menus";
import defaultSeoFields from "./defaultSeoFields";

// Query partial: retrieve default data for all frontend pages.
const defaultPageData = `
  ${defaultSeoFields}
  ${allMenus}
`;
export default defaultPageData;
