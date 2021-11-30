import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_TOKEN } from '@corelib';
import { SkillEndpoints } from '../skill.endpoints';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SkillsService {
    constructor(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    getSkills() {
        return this.http.get(SkillEndpoints.GetSkills(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSkillsByCategoryAndSubcategory(categoryId, subcategoryId) {
        return this.http.get(SkillEndpoints.GetSkillsByCategoryAndSubcategory(this.appConfig, categoryId, subcategoryId)).pipe(
        // shareReplay()
        );
    }
    getSkill(id) {
        return this.http.get(SkillEndpoints.GetSkill(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getCategory(id) {
        return this.http.get(SkillEndpoints.GetSkillCategory(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getSubcategory(id) {
        return this.http.get(SkillEndpoints.GetSkillSubcategory(this.appConfig, id)).pipe(
        // shareReplay()
        );
    }
    getCategories() {
        return this.http.get(SkillEndpoints.GetSkillCategories(this.appConfig)).pipe(
        // shareReplay()
        );
    }
    getSubCategories(categoryId) {
        return this.http.get(SkillEndpoints.GetSkillSubCategories(this.appConfig, categoryId)).pipe(
        // shareReplay()
        );
    }
}
SkillsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService, deps: [{ token: i1.HttpClient }, { token: APP_CONFIG_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
SkillsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0, type: SkillsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbGxpYi9zcmMvbGliL3NlcnZpY2VzL3NraWxscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLFVBQVUsQ0FBQztBQUl4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUdwRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNZLElBQWdCLEVBQ1UsU0FBcUI7UUFEL0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNVLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFDdkQsQ0FBQztJQUVFLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN6RSxnQkFBZ0I7U0FDbkIsQ0FBQztJQUNOLENBQUM7SUFFTSxpQ0FBaUMsQ0FBQyxVQUFrQixFQUFFLGFBQXFCO1FBQzlFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsY0FBYyxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUM1SCxnQkFBZ0I7U0FDbkIsQ0FBQztJQUNOLENBQUM7SUFFTSxRQUFRLENBQUMsRUFBVTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDMUUsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU0sV0FBVyxDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDbEYsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU0sY0FBYyxDQUFDLEVBQVU7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxjQUFjLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDckYsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMxRixnQkFBZ0I7U0FDbkIsQ0FBQztJQUNOLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxVQUFrQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFzQixjQUFjLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDNUcsZ0JBQWdCO1NBQ25CLENBQUM7SUFDTixDQUFDOzsyR0EvQ1EsYUFBYSw0Q0FJVixnQkFBZ0I7K0dBSm5CLGFBQWE7NEZBQWIsYUFBYTtrQkFEekIsVUFBVTs7MEJBS0YsTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOLCBJQXBwQ29uZmlnIH0gZnJvbSAnQGNvcmVsaWInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJU2tpbGwsIElTa2lsbENhdGVnb3J5LCBJU2tpbGxTdWJDYXRlZ29yeSB9IGZyb20gJy4uL21vZGVscy9za2lsbC5tb2RlbCc7XG5pbXBvcnQgeyBTa2lsbEVuZHBvaW50cyB9IGZyb20gJy4uL3NraWxsLmVuZHBvaW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa2lsbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoQVBQX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBhcHBDb25maWc6IElBcHBDb25maWdcbiAgICApIHsgfVxuXG4gICAgcHVibGljIGdldFNraWxscygpOiBPYnNlcnZhYmxlPElTa2lsbFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElTa2lsbFtdPihTa2lsbEVuZHBvaW50cy5HZXRTa2lsbHModGhpcy5hcHBDb25maWcpKS5waXBlKFxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTa2lsbHNCeUNhdGVnb3J5QW5kU3ViY2F0ZWdvcnkoY2F0ZWdvcnlJZDogc3RyaW5nLCBzdWJjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElTa2lsbFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PElTa2lsbFtdPihTa2lsbEVuZHBvaW50cy5HZXRTa2lsbHNCeUNhdGVnb3J5QW5kU3ViY2F0ZWdvcnkodGhpcy5hcHBDb25maWcsIGNhdGVnb3J5SWQsIHN1YmNhdGVnb3J5SWQpKS5waXBlKFxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTa2lsbChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJU2tpbGw+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVNraWxsPihTa2lsbEVuZHBvaW50cy5HZXRTa2lsbCh0aGlzLmFwcENvbmZpZywgaWQpKS5waXBlKFxuICAgICAgICAgICAgLy8gc2hhcmVSZXBsYXkoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYXRlZ29yeShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJU2tpbGw+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVNraWxsPihTa2lsbEVuZHBvaW50cy5HZXRTa2lsbENhdGVnb3J5KHRoaXMuYXBwQ29uZmlnLCBpZCkpLnBpcGUoXG4gICAgICAgICAgICAvLyBzaGFyZVJlcGxheSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN1YmNhdGVnb3J5KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElTa2lsbD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJU2tpbGw+KFNraWxsRW5kcG9pbnRzLkdldFNraWxsU3ViY2F0ZWdvcnkodGhpcy5hcHBDb25maWcsIGlkKSkucGlwZShcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2F0ZWdvcmllcygpOiBPYnNlcnZhYmxlPElTa2lsbENhdGVnb3J5W10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVNraWxsQ2F0ZWdvcnlbXT4oU2tpbGxFbmRwb2ludHMuR2V0U2tpbGxDYXRlZ29yaWVzKHRoaXMuYXBwQ29uZmlnKSkucGlwZShcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3ViQ2F0ZWdvcmllcyhjYXRlZ29yeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElTa2lsbFN1YkNhdGVnb3J5W10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVNraWxsU3ViQ2F0ZWdvcnlbXT4oU2tpbGxFbmRwb2ludHMuR2V0U2tpbGxTdWJDYXRlZ29yaWVzKHRoaXMuYXBwQ29uZmlnLCBjYXRlZ29yeUlkKSkucGlwZShcbiAgICAgICAgICAgIC8vIHNoYXJlUmVwbGF5KClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=