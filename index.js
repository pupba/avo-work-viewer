const boxMap ={
    box1:'images/box/2구_블랙스완.png',
    box2:'images/box/4구_마리카.png',
}
const slotMap={
    box1:2,
    box2:4,
}
const itemMap={
    item1:'images/oil/아보카도엑스트라버진.png',
    item2:'images/oil/올리브엑스트라버진.png',
    item3:'images/oil/올리브포마스.png',
    item4:'images/oil/참기름.png',
    item5:'images/oil/트러플오일.png',
    item6:'images/oil/해바라기.png',
    item7:'images/oil/발사믹식초.png',
    item8:'images/oil/핑크솔트.png',
}

const items = ['아보카도','올리브엑','올리브포','참기름','트러플','해바라기','발사믹','핑크솔트'];

const updateBoxImage = () =>{
    const boxType = document.getElementById('boxSelector').value;
    document.getElementById('boxImage').innerHTML = `<img src="${boxMap[boxType]}" alt="Selected Box">`
}

const handleSlotChange = (event) =>{
    const slotIndex = event.target.dataset.slotIndex;
    const selectedValue = event.target.value;
    const imgElement = document.getElementById(`slotImage${slotIndex}`);
    imgElement.src = itemMap[selectedValue];
    imgElement.style.display = 'block';
}

const updateTray = () => {
    const boxType = document.getElementById('boxSelector')?.value;
    const slotCount = slotMap[boxType];
    const contentImagesDiv = document.getElementById('contentImages');
    contentImagesDiv.innerHTML = '';

    for (let i = 0; i < slotCount; i++) {
        // 각 슬롯의 컨테이너 (row 방향)
        const slotContainer = document.createElement('div');
        slotContainer.className = 'slotContainer';

        // 이미지와 드롭다운을 감싸는 컨테이너 (column 방향)
        const itemGroup = document.createElement('div');
        itemGroup.className = 'itemGroup';

        // 이미지 요소 생성
        const imgElement = document.createElement('img');
        imgElement.id = `slotImage${i}`;
        imgElement.className = 'contentImage';
        itemGroup.appendChild(imgElement);

        // 드롭다운 생성
        const dropdown = document.createElement('select');
        dropdown.className = 'slotSelector';
        dropdown.dataset.slotIndex = i;
        items.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = `item${index+1}`;
            option.textContent = item;
            dropdown.appendChild(option);
        });
        dropdown.addEventListener('change', handleSlotChange);
        itemGroup.appendChild(dropdown);

        // 슬롯 컨테이너에 추가
        slotContainer.appendChild(itemGroup);
        contentImagesDiv.appendChild(slotContainer);
    }
};



// 박스 트레이 선택시 이벤트 리스너
document.getElementById('boxSelector')?.addEventListener('change',()=>{
    updateBoxImage();
    updateTray();
});


document.addEventListener('DOMContentLoaded',()=>{
    updateBoxImage();
    updateTray();
});