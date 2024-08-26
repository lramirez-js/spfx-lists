import { ISPLists } from "./ISPLists";

export interface IHelloWorldProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  webTitle: string;
  listData: ISPLists;
  listName: string;
}
