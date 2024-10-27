let currentSlide = 0; // 현재 슬라이드 인덱스 초기화 --> 추후에 5나 4로 바꿀것
const cardWidth = 300; // 카드의 너비
const cardMargin = 20; // 카드 간의 마진

// 버튼 상태 업데이트 함수
function updateButtonState() {
    const totalSlides = document.querySelectorAll('.card').length; // 총 카드 개수
    const prevBtn = document.getElementById('prevBtn'); // Prev 버튼
    const nextBtn = document.getElementById('nextBtn'); // Next 버튼

    // 첫 번째 슬라이드일 때 Prev 버튼 비활성화
    if (currentSlide === 2) {
        prevBtn.classList.add('disabled'); // 비활성화 클래스 추가
        // prevBtn.onclick = null;
    } else {
        prevBtn.classList.remove('disabled'); // 활성화 클래스 제거
        // prevBtn.onclick = slide(-1);
    }

    // 마지막 슬라이드일 때 Next 버튼 비활성화
    if (currentSlide === totalSlides - 1) {
        nextBtn.classList.add('disabled'); // 비활성화 클래스 추가
    } else {
        nextBtn.classList.remove('disabled'); // 활성화 클래스 제거
    }
}

// 슬라이드 이동 함수
function slide(direction) {
    const totalSlides = document.querySelectorAll('.card').length-2; // 총 카드 개수

    // 방향에 따라 슬라이드 이동
    currentSlide += direction;

    // 슬라이드 인덱스 범위 체크
    if (currentSlide < 0) currentSlide = 2; // 최소값 체크
    if (currentSlide >= totalSlides) currentSlide = totalSlides - 1; // 최대값 체크

    // 슬라이더 이동
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * (cardWidth + cardMargin)}px)`; // 카드 너비만큼 이동

    updateButtonState(); // 버튼 상태 업데이트
}

// 초기 상태 설정
updateButtonState();