import { list_song } from './dataSong';
import { genresData } from './dataSong';
var playlist__wrapper = document.querySelector('.playlist__wrapper');
var release__list = document.querySelector('.release--list');
var charts__list = document.querySelector('.charts--list');
var genre__list = document.querySelector('.genre--list');
var tracks__list = document.querySelector('.tracks--list');

function renderHome() {
    
    playlist__wrapper.innerHTML = list_song.map(({title, artist, avt}) => `
        <li class="playlist__items flex items-center justify-between pr-3 bg-rgba-35 hover:bg-gradient rounded-md cursor-pointer group/items">
            <div class="flex items-center gap-x-3 p-2 overflow-hidden">
                <div class="min-w-[40px] h-10 relative">
                    <img src="${avt}" alt="avt" class="track--avt h-10 w-10 rounded-md">
                    <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#232323e6] rounded-md invisible group-hover/items:visible">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 2.11047e-07 15.698 2.01867e-07 14.9282L3.66308e-08 1.0718C2.7451e-08 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                </div>
                <div class="track--infor flex flex-col gap-y-1 overflow-hidden">
                    <h4 class="track__name text-sm leading-none font-medium text-FFF capitalize whitespace-nowrap overflow-hidden text-ellipsis">${title}</h4>
                    <p class="track__artist text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis">${artist}</p>
                </div>
            </div>
            
            <div class="track--more hidden group-hover/items:block"> 
                <div class=" flex items-center">
                    <div class="h-6 w-6 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                            <path d="M8.50472 13.518L2.13916 7.75207C-1.32038 4.29253 3.76514 -2.34979 8.50472 3.02403C13.2443 -2.34979 18.3068 4.31559 14.8703 7.75207L8.50472 13.518Z" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="h-6 w-6 rounded-full flex items-center justify-center text-FFF">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                    </div>        
                </div>
            </div>
        </li>
    `).join("");

    release__list.innerHTML = list_song.map(({title, artist, avt}) => `
        <div class="release--items flex items-center justify-between pr-3 bg-rgba-35 hover:bg-gradient rounded-md cursor-pointer group/items">
            <div class="flex items-center gap-x-3 p-2 overflow-hidden">
                <div class="min-w-[60px] h-[60px] relative">
                    <img src="${avt}" alt="avt" class="track--avt h-[60px] w-[60px] rounded-md">
                    <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#232323e6] rounded-md invisible group-hover/items:visible">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 2.11047e-07 15.698 2.01867e-07 14.9282L3.66308e-08 1.0718C2.7451e-08 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                </div>
                <div class="track--infor flex flex-col gap-y-2 overflow-hidden">
                    <h4 class="track__name text-sm leading-none font-medium text-FFF capitalize whitespace-nowrap overflow-hidden text-ellipsis">${title}</h4>
                    <p class="track__artist text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis">${artist}</p>
                    <p class="text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis"><span>35</span> <span>phút trước</span></p>
                </div>
            </div>
            <div class="track--more hidden group-hover/items:block"> 
                <div class="flex items-center">
                    <div class="h-6 w-6 rounded-full flex items-center justify-center text-FFF relative group/more">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        <ul class="display-more absolute bottom-6 -right-3 z-50 p-4 bg-gradient text-B8B rounded-md flex flex-col gap-y-3 invisible group-hover/more:visible">
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                <path d="M8.50472 13.518L2.13916 7.75207C-1.32038 4.29253 3.76514 -2.34979 8.50472 3.02403C13.2443 -2.34979 18.3068 4.31559 14.8703 7.75207L8.50472 13.518Z" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Thêm vào mục yêu thích</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-folder-plus' ></i>
                                <p>Thêm vào danh sách phát</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-plus' ></i>
                                <p>Thêm vào playlist</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-link' ></i>
                                <p>Sao chép link</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-share-alt' ></i>
                                <p>Chia sẻ</p>
                            </li>
                        </ul>
                    </div>        
                </div>
            </div>
        </div>
    `).join("");

    genre__list.innerHTML = genresData.map(({title, number_tracks, avt}) => `
        <div class="genre--items">
            <div class="genre--items--avt overflow-hidden cursor-pointer relative group/items">
                <a href="#">
                    <img src="${avt}" alt="img" class="w-full h-fit rounded-md group-hover/items:scale-110 transition duration-300">
                </a>
                <div class="absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center gap-x-3 rounded-md bg-rgba-65 invisible group-hover/items:visible">
                    <div class="heart--icon h-7 w-7 text-2xl text-FFF flex items-center justify-center hover:txt-gradient">
                        <i class='bx bx-heart' ></i>
                    </div>
                    <div class="play--icon h-9 w-9 text-4xl text-FFF flex items-center justify-center hover:txt-gradient">
                        <i class='bx bx-play-circle'></i>
                    </div>
                    <div class="more--icon h-7 w-7 text-3xl text-FFF flex items-center justify-center relative group/hv-items">
                        <i class='bx bx-dots-horizontal-rounded group-hover/hv-items:txt-gradient'></i>
                        <div class="absolute top-12 left-0 opacity-0 invisible group-hover/hv-items:visible group-hover/hv-items:top-7 group-hover/hv-items:opacity-100 transition">
                            <ul class="display-more p-4 bg-gradient text-B8B rounded-md flex flex-col gap-y-3">
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-folder-plus"></i>
                                    <p>Thêm vào danh sách phát</p>
                                </li>
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-link"></i>
                                    <p>Sao chép link</p>
                                </li>
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-share-alt"></i>
                                    <p>Chia sẻ</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="genre--items--infor mt-2 flex flex-col gap-y-1">
                <h4 class="text-base font-medium text-FFF capitalize whitespace-nowrap overflow-hidden text-ellipsis">${title}</h4>
                <p class="text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis">${number_tracks} tracks</p>
            </div>
        </div>
    `).join("");

    charts__list.innerHTML = list_song.map(({title, artist, avt}) => `
        <div class="release--items flex items-center justify-between pr-3 bg-rgba-35 hover:bg-gradient rounded-md cursor-pointer group/items">
            <div class="flex items-center gap-x-3 p-2 overflow-hidden">
                <div class="min-w-[60px] h-[60px] relative">
                    <img src="${avt}" alt="avt" class="track--avt h-[60px] w-[60px] rounded-md">
                    <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#232323e6] rounded-md invisible group-hover/items:visible">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                            <path d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 2.11047e-07 15.698 2.01867e-07 14.9282L3.66308e-08 1.0718C2.7451e-08 0.301997 0.833333 -0.179129 1.5 0.205771L13.5 7.13397Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                </div>
                <div class="track--infor flex flex-col gap-y-2 overflow-hidden">
                    <h4 class="track__name text-sm leading-none font-medium text-FFF capitalize whitespace-nowrap overflow-hidden text-ellipsis">${title}</h4>
                    <p class="track__artist text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis">${artist}</p>
                    <p class="text-xs leading-none font-medium text-B8B capitalize whitespace-nowrap overflow-hidden text-ellipsis"><span>35</span> <span>lượt nghe</span></p>
                </div>
            </div>
            <div class="track--more hidden group-hover/items:block"> 
                <div class="flex items-center">
                    <div class="h-6 w-6 rounded-full flex items-center justify-center text-FFF relative group/more">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        <ul class="display-more absolute bottom-6 -right-3 z-50 p-4 bg-gradient text-B8B rounded-md flex flex-col gap-y-3 invisible group-hover/more:visible">
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                <path d="M8.50472 13.518L2.13916 7.75207C-1.32038 4.29253 3.76514 -2.34979 8.50472 3.02403C13.2443 -2.34979 18.3068 4.31559 14.8703 7.75207L8.50472 13.518Z" stroke="#B8B8B8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Thêm vào mục yêu thích</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-folder-plus' ></i>
                                <p>Thêm vào danh sách phát</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-plus' ></i>
                                <p>Thêm vào playlist</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-link' ></i>
                                <p>Sao chép link</p>
                            </li>
                            <!-- ===== ITEMS ===== -->
                            <li class="w-[250px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                <i class='bx bx-share-alt' ></i>
                                <p>Chia sẻ</p>
                            </li>
                        </ul>
                    </div>        
                </div>
            </div>
        </div>
    `).join(""); 
}
renderHome();

function renderLibrary(){
    tracks__list.innerHTML = list_song.map(({id, title, artist, avt, time}) => `
        <div class="music--items bg-[#1D1D1D] rounded-md py-3 pl-5 pr-8 flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-x-7">
                <p class="music--number text-2xl text-B8B leading-none font-medium capitalize">${id}</p>
                <div class="music-infor flex items-center gap-x-3">
                    <div class="music--avt h-11 w-11">
                        <img src="${avt}" alt="" class="h-10 w-10 rounded-md">
                    </div>
                    <div class="music--desc">
                        <p class="text-FFF text-sm leading-none font-semibold tracking-[.36px] capitalize">${title}</p>
                        <span class="text-B8B text-xs leading-none font-medium tracking-[.36px] capitalize">${artist}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-x-20 ">
                <div class="music-time text-base text-B8B leading-none font-medium tracking-[.36px] capitalize">${time}</div>
                <div class="music-wave opacity-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M0 9.75C0 8.67304 0.812957 7.8 1.81579 7.8C2.81862 7.8 3.63158 8.67304 3.63158 9.75V16.25C3.63158 17.327 2.81862 18.2 1.81579 18.2C0.812957 18.2 0 17.327 0 16.25V9.75Z" fill="url(#paint0_linear_9_56)"/>
                        <path d="M4.84211 4.55C4.84211 3.47304 5.65506 2.6 6.6579 2.6C7.66073 2.6 8.47368 3.47304 8.47368 4.55V21.45C8.47368 22.527 7.66073 23.4 6.6579 23.4C5.65506 23.4 4.84211 22.527 4.84211 21.45V4.55Z" fill="url(#paint1_linear_9_56)"/>
                        <path d="M9.68421 5.85C9.68421 4.77304 10.4972 3.9 11.5 3.9C12.5028 3.9 13.3158 4.77304 13.3158 5.85V20.15C13.3158 21.227 12.5028 22.1 11.5 22.1C10.4972 22.1 9.68421 21.227 9.68421 20.15V5.85Z" fill="url(#paint2_linear_9_56)"/>
                        <path d="M14.5263 1.95C14.5263 0.873044 15.3393 0 16.3421 0C17.3449 0 18.1579 0.873045 18.1579 1.95V24.05C18.1579 25.127 17.3449 26 16.3421 26C15.3393 26 14.5263 25.127 14.5263 24.05V1.95Z" fill="url(#paint3_linear_9_56)"/>
                        <path d="M19.3684 3.25C19.3684 2.17304 20.1814 1.3 21.1842 1.3C22.187 1.3 23 2.17304 23 3.25V22.75C23 23.827 22.187 24.7 21.1842 24.7C20.1814 24.7 19.3684 23.827 19.3684 22.75V3.25Z" fill="url(#paint4_linear_9_56)"/>
                        <defs>
                        <linearGradient id="paint0_linear_9_56" x1="-2.96541" y1="-4.00001" x2="30.4418" y2="-2.18783" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5179E"/>
                            <stop offset="1" stop-color="#7209B7"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_9_56" x1="-2.96541" y1="-4.00001" x2="30.4418" y2="-2.18783" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5179E"/>
                            <stop offset="1" stop-color="#7209B7"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_9_56" x1="-2.96541" y1="-4.00001" x2="30.4418" y2="-2.18783" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5179E"/>
                            <stop offset="1" stop-color="#7209B7"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_9_56" x1="-2.96541" y1="-4.00001" x2="30.4418" y2="-2.18783" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5179E"/>
                            <stop offset="1" stop-color="#7209B7"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_9_56" x1="-2.96541" y1="-4.00001" x2="30.4418" y2="-2.18783" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5179E"/>
                            <stop offset="1" stop-color="#7209B7"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="music-icon text-3xl text-B8B flex items-center gap-x-3">
                    <div class="music-icon--play"><i class='bx bx-play'></i></div>
                    <div class="music-icon--more relative group/items">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        <div class="absolute top-9 right-0 z-40 invisible group-hover/items:visible">
                            <ul class="display-more p-4 bg-gradient text-B8B rounded-md flex flex-col gap-y-3">
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-folder-plus"></i>
                                    <p>Thêm vào danh sách phát</p>
                                </li>
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-link"></i>
                                    <p>Sao chép link</p>
                                </li>
                                <!-- ===== ITEMS ===== -->
                                <li class="w-[220px] text-sm flex items-center gap-x-3 hover:text-FFF">
                                    <i class="bx bx-share-alt"></i>
                                    <p>Chia sẻ</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")
}
renderLibrary();