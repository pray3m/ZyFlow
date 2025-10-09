import puppeteer from "puppeteer";
import type { ExecutionEnvironment } from "@/types/executor";
import type { LaunchBrowserTask } from "../task/LaunchBrowser";

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput("Website URL");
    console.log("@@websiteUrl", websiteUrl);

    const browser = await puppeteer.launch({
      headless: true, // for testing
    });
    environment.setBrowser(browser);
    const page = await browser.newPage();
    await page.goto(websiteUrl);
    environment.setPage(page);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
