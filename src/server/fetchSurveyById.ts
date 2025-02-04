'use server';

import path from 'path';
import fs from 'fs/promises';
import { SurveyData } from 'features/survey/surveyTypes';

export async function fetchSurveyById(
  surveyId: string,
): Promise<SurveyData | null> {
  try {
    const filePath = path.join(process.cwd(), 'configs', `${surveyId}.json`);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as SurveyData;
  } catch (error) {
    console.error('Error reading survey config:', error);
    return null;
  }
}
