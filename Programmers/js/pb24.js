function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        
        if (width < Math.max(...sizes[i])) {
            width = Math.max(...sizes[i]);
        }
        if (height < Math.min(...sizes[i])) {
            height = Math.min(...sizes[i]);
        }
        console.log(width, height);
    }
    return width * height;
}
