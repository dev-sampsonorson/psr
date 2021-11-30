export class Alert {
    constructor(init) {
        this.id = Symbol('alert');
        this.type = AlertType.Info;
        this.title = '';
        this.message = '';
        this.messages = [];
        this.actions = [];
        this.autoClose = true;
        this.timeToClose = 5;
        Object.assign(this, init);
    }
}
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZWRsaWIvc3JjL2xpYi9hbGVydC9hbGVydC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxNQUFNLE9BQU8sS0FBSztJQVVkLFlBQVksSUFBb0I7UUFUaEMsT0FBRSxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixTQUFJLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsYUFBUSxHQUEwQixFQUFFLENBQUM7UUFDckMsWUFBTyxHQUFtQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUdwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFXRCxNQUFNLENBQU4sSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLCtDQUFPLENBQUE7SUFDUCwyQ0FBSyxDQUFBO0lBQ0wseUNBQUksQ0FBQTtJQUNKLCtDQUFPLENBQUE7QUFDWCxDQUFDLEVBTFcsU0FBUyxLQUFULFNBQVMsUUFLcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VJdGVtIHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRDb21wb25lbnQge1xyXG4gICAgYWxlcnQ6IEFsZXJ0IHwgdW5kZWZpbmVkO1xyXG4gICAgY2xvc2VBbGVydDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnQge1xyXG4gICAgaWQ6IFN5bWJvbCA9IFN5bWJvbCgnYWxlcnQnKTtcclxuICAgIHR5cGU6IEFsZXJ0VHlwZSA9IEFsZXJ0VHlwZS5JbmZvO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgICBtZXNzYWdlczogeyBtZXNzYWdlOiBzdHJpbmcgfVtdID0gW107XHJcbiAgICBhY3Rpb25zOiBJQWxlcnRBY3Rpb25bXSA9IFtdO1xyXG4gICAgYXV0b0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHRpbWVUb0Nsb3NlOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluaXQ6IFBhcnRpYWw8QWxlcnQ+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRBY3Rpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcm91dGU6IGFueVtdIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydE9wdGlvbnMge1xyXG4gICAgYXV0b0Nsb3NlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbGVydFR5cGUge1xyXG4gICAgU3VjY2VzcyxcclxuICAgIEVycm9yLFxyXG4gICAgSW5mbyxcclxuICAgIFdhcm5pbmdcclxufSJdfQ==