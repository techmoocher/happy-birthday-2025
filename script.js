document.addEventListener('DOMContentLoaded', () => {
    // Music setup
    const bgMusic = document.getElementById('bgMusic');
    
    // Start playing music after user interaction
    document.body.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    }, { once: true });
    
    // Animation timings
    const cakeBase = document.querySelector('.cake-base');
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');
    const cream1 = document.querySelector('.cream-1');
    const cream2 = document.querySelector('.cream-2');
    const candles = document.querySelectorAll('.candle');
    const flames = document.querySelectorAll('.flame');
    const showCardBtn = document.getElementById('showCard');
    
    // Start animations with delays
    setTimeout(() => {
        cakeBase.style.opacity = '1';
        cakeBase.style.transition = 'opacity 0.5s ease';
    }, 500);
    
    // First layer animation
    setTimeout(() => {
        layer1.style.opacity = '1';
        layer1.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        layer1.style.transform = 'translateX(-50%) translateY(0)';
    }, 1000);
    
    // First cream layer animation
    setTimeout(() => {
        cream1.style.opacity = '1';
        cream1.style.transition = 'all 0.8s ease';
    }, 2000);
    
    // Second layer animation
    setTimeout(() => {
        layer2.style.opacity = '1';
        layer2.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        layer2.style.transform = 'translateX(-50%) translateY(0)';
    }, 3000);
    
    // Second cream layer animation
    setTimeout(() => {
        cream2.style.opacity = '1';
        cream2.style.transition = 'all 0.8s ease';
    }, 4000);
    
    // Third layer animation
    setTimeout(() => {
        layer3.style.opacity = '1';
        layer3.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        layer3.style.transform = 'translateX(-50%) translateY(0)';
    }, 5000);

    // Candles animation - appear one by one
    setTimeout(() => {
        candles.forEach((candle, index) => {
            setTimeout(() => {
                candle.style.opacity = '1';
                candle.style.transition = 'opacity 0.5s ease';
            }, index * 300);
        });
    }, 6000);
    
    // Light the flames
    setTimeout(() => {
        flames.forEach((flame, index) => {
            setTimeout(() => {
                flame.style.opacity = '1';
                flame.style.transition = 'opacity 0.3s ease';
            }, index * 200);
        });
    }, 8500);
    
    // Show button
    setTimeout(() => {
        showCardBtn.style.opacity = '1';
        showCardBtn.style.transition = 'opacity 1s ease';
    }, 10000);
    
    // Birthday card functionality
    const birthdayCard = document.getElementById('birthdayCard');
    const closeCardBtn = document.getElementById('closeCard');
    const showGalleryBtn = document.getElementById('showGallery');
    const galleryContainer = document.getElementById('galleryContainer');
    const gallerySlider = document.getElementById('gallerySlider');
    const closeGalleryBtn = document.getElementById('closeGallery');

    let hasSeenInstructions = false;
    
    showCardBtn.addEventListener('click', () => {
        birthdayCard.classList.add('visible');
    });
    
    closeCardBtn.addEventListener('click', () => {
        birthdayCard.classList.remove('visible');
    });
    
    if (showGalleryBtn) {
        showGalleryBtn.addEventListener('click', () => {
            birthdayCard.classList.remove('visible'); // Hide the card first
            showGallery();
        });
    }
    
    closeGalleryBtn.addEventListener('click', () => {
        galleryContainer.classList.remove('visible');
        // Stop the slideshow if it's running
        if (window.slideshowInterval) {
            clearInterval(window.slideshowInterval);
        }
    });
    
    // Gallery content with images and messages
    const galleryContent = [
        { src: 'images/gallery/1.jpg', message: "my fav flower 🌷" },
        { src: 'images/gallery/2.jpg', message: "dễ thưn vị tròiii" },
        { src: 'images/gallery/3.jpg', message: "đúng là mặt trời có khác, nhìn ấm áp vãiii 🌞" },
        { src: 'images/gallery/4.jpg', message: "hế lô bạch tuộc 🐙" },
        { src: 'images/gallery/5.jpg', message: "nhìn con trên với con dưới chẳng khác gì nhau 🤪" },
        { src: 'images/gallery/6.jpg', message: "tròi oi chị này lên vtv 😱" },
        { src: 'images/gallery/7.jpg', message: "ảnh hơi mờ ... mờ ê mêeeee 😍" },
        { src: 'images/gallery/8.jpg', message: "vitamin sea 🌊" },
        { src: 'images/gallery/9.jpg', message: "nihao con dịt 🦆" },
        { src: 'images/gallery/10.jpg', message: "nữ chính anime nào xinh vại tròiiii 📽" },
        { src: 'images/gallery/11.jpg', message: "nghe nói chị này hong thể xào nấu!!! 👩‍🍳" },
        { src: 'images/gallery/12.jpg', message: "tò mò chị này trên live ghêeee 😁" },
        { src: 'images/gallery/13.jpg', message: "sao background thấy trời tối mà có mặt trời vị ⁉" },
        { src: 'images/gallery/14.jpg', message: "kind and nice!!! 🥰" },
        { src: 'images/gallery/15.jpg', message: "mấy anh goalie chắc khoái chị này .... không góc chếtttt 🤭" },
        { src: 'images/gallery/16.jpg', message: "ngủ thoy cũng đẹp hởooo!?" },
        { src: 'images/gallery/17.jpg', message: "xin chào người đệppp" },
        { src: 'images/gallery/18.jpg', message: "con mèo cách ganh tị độ dễ thưn nên chạy 🐱" },
        { src: 'images/gallery/19.jpg', message: "tìm 3 điểm khác biệt so với mọi ngày 🤔😵" },
        { src: 'images/gallery/20.jpg', message: "canh chúa ốngggg 🍲" },
        { src: 'images/gallery/21.jpg', message: "nhìn tưởng ly trà sữa tiger sugar 🐯" },
        { src: 'images/gallery/22.jpg', message: "chợ Bến Thành nay chuyển qua kế cái chùa ròi hở 🛒" },
        { src: 'images/gallery/23.jpg', message: "sao mà dễ thưn dữ vại nèeee 😍" },
        { src: 'images/gallery/24.jpg', message: "cho hỏi đó phải trái tim của toai hong vại 💖" },
        { src: 'images/gallery/25.jpg', message: "Happy thôi nôi nháaaa!!! 🎂" }
    ];
    
    // Gallery content and functions
    // function showGallery() {
    //     const instructionOverlay = document.getElementById('instructionOverlay');

    //     // Show the instruction screen first
    //     instructionOverlay.classList.add('visible');
    //     galleryContainer.classList.add('visible');

    //     // Hide instructions and show gallery after 5 seconds
    //     setTimeout(() => {
    //         instructionOverlay.classList.remove('visible');
    //         // Clear previous images
    //         gallerySlider.innerHTML = '';
            
    //         // Create slideshow structure
    //         const slideshowContainer = document.createElement('div');
    //         slideshowContainer.className = 'slideshow-container';
    //         gallerySlider.appendChild(slideshowContainer);
            
    //         // Create navigation buttons
    //         const prevBtn = document.createElement('button');
    //         prevBtn.className = 'nav-btn prev-btn';
    //         prevBtn.innerHTML = '&#10094;';
    //         slideshowContainer.appendChild(prevBtn);
            
    //         const nextBtn = document.createElement('button');
    //         nextBtn.className = 'nav-btn next-btn';
    //         nextBtn.innerHTML = '&#10095;';
    //         slideshowContainer.appendChild(nextBtn);
            
    //         // Create slide wrapper
    //         const slideWrapper = document.createElement('div');
    //         slideWrapper.className = 'slide-wrapper';
    //         slideshowContainer.appendChild(slideWrapper);
            
    //         // Shuffle gallery content
    //         const shuffledGallery = shuffleArray([...galleryContent]);
    //         let currentSlideIndex = 0;
            
    //         // Create all slides
    //         shuffledGallery.forEach((item, index) => {
    //             const slide = document.createElement('div');
    //             slide.className = 'slide';
    //             slide.dataset.index = index;
                
    //             // Create flip card structure
    //             const flipCard = document.createElement('div');
    //             flipCard.className = 'flip-card';
                
    //             const flipCardInner = document.createElement('div');
    //             flipCardInner.className = 'flip-card-inner';
                
    //             // Front of card (image)
    //             const flipCardFront = document.createElement('div');
    //             flipCardFront.className = 'flip-card-front';
    //             const img = document.createElement('img');
    //             img.src = item.src;
    //             img.alt = 'Gallery Image';
    //             flipCardFront.appendChild(img);
                
    //             // Back of card (message)
    //             const flipCardBack = document.createElement('div');
    //             flipCardBack.className = 'flip-card-back';
    //             const message = document.createElement('p');
    //             message.textContent = item.message;
    //             flipCardBack.appendChild(message);
                
    //             // Assemble flip card
    //             flipCardInner.appendChild(flipCardFront);
    //             flipCardInner.appendChild(flipCardBack);
    //             flipCard.appendChild(flipCardInner);
    //             slide.appendChild(flipCard);
                
    //             // Initially hide all slides except the first one
    //             slide.style.display = index === 0 ? 'block' : 'none';
                
    //             slideWrapper.appendChild(slide);
                
    //             // Add click event to flip card
    //             flipCard.addEventListener('click', () => {
    //                 flipCard.classList.toggle('flipped');
    //             });
    //         });
            
    //         // Show gallery
    //         galleryContainer.classList.add('visible');
            
    //         // Navigation event listeners
    //         prevBtn.addEventListener('click', () => navigateSlides('prev'));
    //         nextBtn.addEventListener('click', () => navigateSlides('next'));
            
    //         function navigateSlides(direction) {
    //             // Get all slides
    //             const slides = document.querySelectorAll('.slide');
                
    //             // Hide current slide and reset flip state
    //             slides[currentSlideIndex].style.display = 'none';
    //             const currentFlipCard = slides[currentSlideIndex].querySelector('.flip-card');
    //             if (currentFlipCard) {
    //                 currentFlipCard.classList.remove('flipped');
    //             }
                
    //             // Update index based on direction (circular navigation)
    //             if (direction === 'prev') {
    //                 currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    //             } else {
    //                 currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    //             }
                
    //             // Show new current slide
    //             slides[currentSlideIndex].style.display = 'block';
    //         }
    //     }, 3000);
    // }

    // This new function contains all the logic to build the gallery content
    function buildAndShowGallery() {
        const gallerySlider = document.getElementById('gallerySlider');
        
        // Clear previous images
        gallerySlider.innerHTML = '';
        
        // Create slideshow structure
        const slideshowContainer = document.createElement('div');
        slideshowContainer.className = 'slideshow-container';
        gallerySlider.appendChild(slideshowContainer);
        
        // Create navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.className = 'nav-btn prev-btn';
        prevBtn.innerHTML = '❮';
        slideshowContainer.appendChild(prevBtn);
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'nav-btn next-btn';
        nextBtn.innerHTML = '❯';
        slideshowContainer.appendChild(nextBtn);
        
        // Create slide wrapper
        const slideWrapper = document.createElement('div');
        slideWrapper.className = 'slide-wrapper';
        slideshowContainer.appendChild(slideWrapper);
        
        // Shuffle gallery content
        const shuffledGallery = shuffleArray([...galleryContent]);
        let currentSlideIndex = 0;
        
        // Create all slides
        shuffledGallery.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.dataset.index = index;
            
            // Create flip card structure
            const flipCard = document.createElement('div');
            flipCard.className = 'flip-card';
            
            const flipCardInner = document.createElement('div');
            flipCardInner.className = 'flip-card-inner';
            
            // Front of card (image)
            const flipCardFront = document.createElement('div');
            flipCardFront.className = 'flip-card-front';
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = 'Gallery Image';
            flipCardFront.appendChild(img);
            
            // Back of card (message)
            const flipCardBack = document.createElement('div');
            flipCardBack.className = 'flip-card-back';
            const message = document.createElement('p');
            message.textContent = item.message;
            flipCardBack.appendChild(message);
            
            // Assemble flip card
            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            slide.appendChild(flipCard);
            
            // Initially hide all slides except the first one
            slide.style.display = index === 0 ? 'block' : 'none';
            
            slideWrapper.appendChild(slide);
            
            // Add click event to flip card
            flipCard.addEventListener('click', () => {
                flipCard.classList.toggle('flipped');
            });
        });
        
        // Navigation event listeners
        prevBtn.addEventListener('click', () => navigateSlides('prev'));
        nextBtn.addEventListener('click', () => navigateSlides('next'));
        
        function navigateSlides(direction) {
            // Get all slides
            const slides = document.querySelectorAll('.slide');
            
            // Hide current slide and reset flip state
            slides[currentSlideIndex].style.display = 'none';
            const currentFlipCard = slides[currentSlideIndex].querySelector('.flip-card');
            if (currentFlipCard) {
                currentFlipCard.classList.remove('flipped');
            }
            
            // Update index based on direction (circular navigation)
            if (direction === 'prev') {
                currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            } else {
                currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            }
            
            // Show new current slide
            slides[currentSlideIndex].style.display = 'block';
        }
    }

    // This is the updated showGallery function that checks the flag
    function showGallery() {
        const galleryContainer = document.getElementById('galleryContainer');
        const instructionOverlay = document.getElementById('instructionOverlay');

        // Make the main gallery container visible
        galleryContainer.classList.add('visible');

        // Check if the user has seen the instructions yet
        if (!hasSeenInstructions) {
            // If it's the first time, show the instructions
            instructionOverlay.classList.add('visible');

            // Set a timer to hide the instructions and build the gallery
            setTimeout(() => {
                instructionOverlay.classList.remove('visible');
                buildAndShowGallery();
            }, 5000); // 5-second delay

            // Set the flag to true so this block doesn't run again
            hasSeenInstructions = true;
        } else {
            // If the user has already seen the instructions, build the gallery immediately
            buildAndShowGallery();
        }
    }
    
    // Shuffle function for array randomization
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});