const blobContainers = document.querySelectorAll('.blob-container');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    // 마우스 위치를 -1 ~ 1 사이의 값으로 정규화
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
    // 부드러운 움직임을 위한 보간 (Lerp)
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    blobContainers.forEach((container, index) => {
        const speed = (index + 1) * 40; // 컨테이너마다 다른 속도 적용

        // 인덱스에 따라 방향을 다르게 설정하여 입체감 부여
        const direction = index === 0 ? 1 : -1;
        container.style.transform = `translate(${currentX * speed * direction}px, ${currentY * speed * direction}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
