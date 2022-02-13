import { IAppConfig } from '@psr/core';

export interface IMySkillEndpoints {
    readonly UpsertMySkillRating: (config: IAppConfig) => string;
    readonly GetSkillRatingsByCategoryAndSubcategoryAndEmployee: (config: IAppConfig, categoryId: string, subcategoryId: string, employeeId: string) => string;
}

const endpoints: IMySkillEndpoints = {
    UpsertMySkillRating: (config: IAppConfig) => config.getUrl(`employees/upsert-skill-rating`),
    GetSkillRatingsByCategoryAndSubcategoryAndEmployee: (config: IAppConfig, categoryId: string, subcategoryId: string, employeeId: string) => config.getUrl(`employees/${employeeId}/categories/${categoryId}/subcategories/${subcategoryId}/skillratings`),
};

export const MySkillEndpoints: IMySkillEndpoints = endpoints;
