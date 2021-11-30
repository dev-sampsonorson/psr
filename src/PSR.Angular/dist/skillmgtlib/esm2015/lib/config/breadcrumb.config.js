export const breadcrumbConfig = [
    {
        name: "categories",
        label: "Categories",
        path: '/skills/categories',
        newRoute: '/skills/categories'
    },
    {
        name: "subcategories",
        label: "Sub categories",
        path: '/skills/subcategories',
        newRoute: '/skills/categories/:categoryId/subcategories'
    },
    {
        name: "list",
        label: "Skills",
        path: '/skills/list',
        newRoute: '/skills/categories/:categoryId/subcategories/:subcategoryId/list'
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9za2lsbG1ndGxpYi9zcmMvbGliL2NvbmZpZy9icmVhZGNydW1iLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0I7SUFDM0M7UUFDSSxJQUFJLEVBQUUsWUFBWTtRQUNsQixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFFBQVEsRUFBRSxvQkFBb0I7S0FDakM7SUFDRDtRQUNJLElBQUksRUFBRSxlQUFlO1FBQ3JCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixRQUFRLEVBQUUsOENBQThDO0tBQzNEO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFLGtFQUFrRTtLQUMvRTtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQnJlYWRjcnVtYiB9IGZyb20gJ0BzaGFyZWRsaWInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBicmVhZGNydW1iQ29uZmlnOiBJQnJlYWRjcnVtYltdID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiY2F0ZWdvcmllc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIkNhdGVnb3JpZXNcIixcclxuICAgICAgICBwYXRoOiAnL3NraWxscy9jYXRlZ29yaWVzJyxcclxuICAgICAgICBuZXdSb3V0ZTogJy9za2lsbHMvY2F0ZWdvcmllcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJzdWJjYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiU3ViIGNhdGVnb3JpZXNcIixcclxuICAgICAgICBwYXRoOiAnL3NraWxscy9zdWJjYXRlZ29yaWVzJyxcclxuICAgICAgICBuZXdSb3V0ZTogJy9za2lsbHMvY2F0ZWdvcmllcy86Y2F0ZWdvcnlJZC9zdWJjYXRlZ29yaWVzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImxpc3RcIixcclxuICAgICAgICBsYWJlbDogXCJTa2lsbHNcIixcclxuICAgICAgICBwYXRoOiAnL3NraWxscy9saXN0JyxcclxuICAgICAgICBuZXdSb3V0ZTogJy9za2lsbHMvY2F0ZWdvcmllcy86Y2F0ZWdvcnlJZC9zdWJjYXRlZ29yaWVzLzpzdWJjYXRlZ29yeUlkL2xpc3QnXHJcbiAgICB9LFxyXG5dIl19