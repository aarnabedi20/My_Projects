function [LL, LC, CC] = intersects(lines, circles)
    clf('reset');
    set(gcf,'visible','off');
    matrix = []; 
    matrix2 = [];
    matrix3 = [];
    temp = [];
    LL = [];
    LC = [];
    CC = [];
    
    for i=1:size(lines,1)
        x = [lines(i,1),lines(i,3)];
        y = [lines(i,2),lines(i,4)];
        hold on;
        l = plot(x,y);
        set(l, 'LineWidth', 1);
        set(l, 'Tag', 'line');
        matrix = [matrix ; l];
        matrix3 = [matrix3 ; l];
        hold off;
    end
    
    for i=1:size(circles,1)
        x = circles(i,1);
        y = circles(i,2);
        r = circles(i,3);
        theta = linspace(0,2*pi);
        x_unit = r * cos(theta) + x;
        y_unit = r * sin(theta) + y;
        hold on;
        c = plot(x_unit,y_unit);
        set(c, 'LineWidth', 1);
        set(c, 'Tag', 'circle');
        matrix2 = [matrix2 ; c];
        matrix3 = [matrix3 ; c];
        hold off;
    end
    
    %LL
    for i = 1:length(matrix)
        for j = (i + 1):length(matrix)
            a = matrix(i);
            b = matrix(j);
            x1 = get(a, 'XData');
            y1 = get(a, 'YData');
            x2 = get(b, 'XData');
            y2 = get(b, 'YData');
            [xi, yi] = polyxpoly(x1,y1,x2,y2);
            LL = [LL ; xi,yi];
        end
    end
    
    %CC
    for i = 1:length(matrix2)
        for j = (i + 1):length(matrix2)
            a = matrix2(i);
            b = matrix2(j);
            x1 = get(a, 'XData');
            y1 = get(a, 'YData');
            x2 = get(b, 'XData');
            y2 = get(b, 'YData');
            [xi, yi] = polyxpoly(x1,y1,x2,y2);
            CC = [CC ; xi,yi];
        end
    end
    
    %LC
    for i = 1:length(matrix3)
        for j = (i + 1):length(matrix3)
            a = matrix3(i);
            b = matrix3(j);
            x1 = get(a, 'XData');
            y1 = get(a, 'YData');
            x2 = get(b, 'XData');
            y2 = get(b, 'YData');
            [xi, yi] = polyxpoly(x1,y1,x2,y2);
            LC = [LC ; xi,yi];
        end
    end
    temp = [LL ; CC];
    LC(ismember(LC,temp,'rows'),:)=[];
    
    if isempty(LL)
        LL = [];
    end
    if isempty(LC)
        LC = [];
    end
    if isempty(CC)
        CC = [];
    end
    LL
    LC
    CC
end