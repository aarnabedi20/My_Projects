function varargout = Interface(varargin)
% INTERFACE MATLAB code for Interface.fig
%      INTERFACE, by itself, creates a new INTERFACE or raises the existing
%      singleton*.
%
%      H = INTERFACE returns the handle to a new INTERFACE or the handle to
%      the existing singleton*.
%
%      INTERFACE('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in INTERFACE.M with the given input arguments.
%
%      INTERFACE('Property','Value',...) creates a new INTERFACE or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before Interface_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to Interface_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help Interface

% Last Modified by GUIDE v2.5 09-Dec-2017 23:10:17

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @Interface_OpeningFcn, ...
                   'gui_OutputFcn',  @Interface_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before Interface is made visible.
function Interface_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to Interface (see VARARGIN)

% Choose default command line output for Interface
handles.output = hObject;
set(hObject, 'WindowButtonDownFcn', @MouseCallback);

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes Interface wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = Interface_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;

%Disables Everything
function Disable(hObject, eventdata, handles)
set(handles.LineButton, 'Enable', 'off');
set(handles.CircleButton, 'Enable', 'off');
set(handles.IntersectionButton, 'Enable', 'off');
set(handles.DeleteButton, 'Enable', 'off');
set(handles.ClearButton, 'Enable', 'off');
set(handles.ComboBox, 'Enable', 'off');

%Save
guidata(hObject,handles);

%Enables Everything
function Enable(hObject, eventdata, handles)
set(handles.LineButton, 'Enable', 'on');
set(handles.CircleButton, 'Enable', 'on');
set(handles.IntersectionButton, 'Enable', 'on');
set(handles.DeleteButton, 'Enable', 'on');
set(handles.ClearButton, 'Enable', 'on');
set(handles.ComboBox, 'Enable', 'on');

%Save
guidata(hObject,handles);

function MouseCallback(figureHandle,varargin)
Distance = 2; %Distance to determine the selected line
handles = guidata(figureHandle);

%Get the position
Point = get(figureHandle, 'CurrentPoint');
x = Point(1,1);
y = Point(1,2);

%Get Axis position
AxesPosition = get(handles.axes1, 'Position');
Min_x = AxesPosition(1);
Min_y = AxesPosition(2);
Max_x = Min_x + AxesPosition(3);
Max_y = Min_y + AxesPosition(4);

if x >= Min_x && x <= Max_x && y >= Min_y && y <= Max_y
    if isfield(handles, 'shapeHnds')
        Point = get(handles.axes1, 'CurrentPoint');
        x = Point(2,1);
        y = Point(2,2);
        minDist = Inf;
        minHndIdx = 0;
        
        for i = 1:length(handles.shapeHnds)
            xData = get(handles.shapeHnds(i), 'XData');
            yData = get(handles.shapeHnds(i), 'YData');
            dist  = min((xData-x).^2+(yData-y).^2); 
            if dist < minDist && dist < Distance
                minHndIdx = i;
                minDist = dist;
            end
        end
        
        if minHndIdx~=0
            handles.Selected = minHndIdx;
        else
            handles.Selected = [];
        end
        
        for i = 1:length(handles.shapeHnds)
            if i == minHndIdx
                set(handles.shapeHnds(i), 'LineWidth', 2);
            else
                set(handles.shapeHnds(i), 'LineWidth', 1);
            end
        end
        guidata(figureHandle, handles);
   end
end

% --- Executes on button press in LineButton.
function LineButton_Callback(hObject, eventdata, handles)
% hObject    handle to LineButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

Disable(hObject, eventdata, handles);
if ~isfield(handles,'shapeHnds');
    handles.shapeHnds = [];
end

axis manual;
hold on;
[x y] = ginput(2);
x = [x(1),x(2)];
y = [y(1),y(2)];

l = plot(handles.axes1, x, y);
set(l, 'LineWidth', 1);
set(l, 'Tag', 'line');
handles.shapeHnds = [handles.shapeHnds ; l];
hold off;

Enable(hObject, eventdata, handles);
guidata(hObject,handles);

% --- Executes on button press in CircleButton.
function CircleButton_Callback(hObject, eventdata, handles)
% hObject    handle to CircleButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

Disable(hObject, eventdata, handles);
if ~isfield(handles,'shapeHnds');
    handles.shapeHnds = [];
end

axis manual;
hold on;
[x y] = ginput(2);
r = norm([x(2) - x(1), y(2) - y(1)]);

theta = linspace(0,2*pi);
x_unit = r*cos(theta) + x(1);
y_unit = r*sin(theta) + y(1);

c = plot(x_unit, y_unit);
set(c, 'LineWidth', 1);
set(c, 'Tag', 'circle');
handles.shapeHnds = [handles.shapeHnds ; c];
hold off;

Enable(hObject, eventdata, handles);
guidata(hObject,handles);

% --- Executes on button press in DeleteButton.
function DeleteButton_Callback(hObject, eventdata, handles)
% hObject    handle to DeleteButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

if isfield(handles,'Selected') && ~isempty(handles.Selected)
    delete(handles.shapeHnds(handles.Selected)); 
    handles.shapeHnds(handles.Selected) = [];
    handles.Selected = [];
    
    guidata(hObject,handles); 
end


% --- Executes on button press in ClearButton.
function ClearButton_Callback(hObject, eventdata, handles)
% hObject    handle to ClearButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

for i = 1:length(handles.shapeHnds);
    delete(handles.shapeHnds(1));
    handles.shapeHnds(1) = [];
end
cla;

guidata(hObject,handles);


% --- Executes on selection change in ComboBox.
function ComboBox_Callback(hObject, eventdata, handles)
% hObject    handle to ComboBox (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns ComboBox contents as cell array
%        contents{get(hObject,'Value')} returns selected item from ComboBox

if ~isfield(handles, 'SelectedColOrder');
    handles.SelectedColOrder = 1;
end

if ~isfield(handles, 'Selected') || isempty(handles.Selected)
    switch get(handles.ComboBox, 'Value')
        case 1
            set(handles.axes1, 'ColorOrder', [1 0 0]);
            handles.SelectedColOrder = 1;
        case 2
            set(handles.axes1, 'ColorOrder', [0 1 0]);
            handles.SelectedColOrder = 2;
        case 3
            set(handles.axes1, 'ColorOrder', [0 0 1]);
            handles.SelectedColOrder = 3;
        case 4
            set(handles.axes1, 'ColorOrder', [0 0 0]);
            handles.SelectedColOrder = 4;

    end
    guidata(hObject,handles);

else
    switch get(handles.ComboBox, 'Value')
        case 1
            set(handles.shapeHnds(handles.Selected), 'Color', [1 0 0]);
            set(handles.ComboBox, 'Value', handles.SelectedColOrder)
        case 2
            set(handles.shapeHnds(handles.Selected), 'Color', [0 1 0])
            set(handles.ComboBox, 'Value', handles.SelectedColOrder)
        case 3
            set(handles.shapeHnds(handles.Selected), 'Color', [0 0 1])
            set(handles.ComboBox, 'Value', handles.SelectedColOrder)
        case 4
            set(handles.shapeHnds(handles.Selected), 'Color', [0 0 0])
            set(handles.ComboBox, 'Value', handles.SelectedColOrder)
    end
    
    set(handles.shapeHnds(handles.Selected), 'LineWidth', 1)
    handles.Selected = [];
    guidata(hObject,handles);
end

% --- Executes during object creation, after setting all properties.
function ComboBox_CreateFcn(hObject, eventdata, handles)
% hObject    handle to ComboBox (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: popupmenu controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in IntersectionButton.
function IntersectionButton_Callback(hObject, eventdata, handles)
% hObject    handle to IntersectionButton (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

for i = 1:length(handles.shapeHnds)
    for j = (i + 1):length(handles.shapeHnds)
        a = handles.shapeHnds(i);
        b = handles.shapeHnds(j);
        x1 = get(a, 'XData');
        y1 = get(a, 'YData');
        x2 = get(b, 'XData');
        y2 = get(b, 'YData');
        hold on;
        [xi, yi] = polyxpoly(x1,y1,x2,y2);
        plot(xi, yi, 'r*');
        hold off;
    end
end
