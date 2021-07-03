<template>
    <div class="statistics">
    <h2 class="title statistics_title">Statistics</h2>
    <ul class="statistics_list">
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Electricity</h6>
            <div class="statistics_graph">
                <!-- TODO: тут будет красивый график -->
            </div>
        </li>
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Water</h6>
            <div class="statistics_graph">
                <!-- TODO: тут будет красивый график -->
            </div>
        </li>
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Waste Managament</h6>
            <div class="statistics_graph small">
                <!-- TODO: тут будет красивый график-->
            </div>
        </li>
        <li class="statistics_list-item">
            <div class="statistics_circle-graph">
                <h6 class="statistics_list-item_title">Sorting</h6>
                <div class="statistics_circle-container statistics_graph">
                    <div class="statistics_circle-graph-date">Apr, 2020</div>
                    <div class="statistics_sorting-diagramma">
                        <!-- TODO: тут должна быть круговая диаграмма -->
                    </div>
                    <ul class="statistics_sorting-materials">
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Paper</span>
                        </li>
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Glass</span>
                        </li>
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Plastic</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="statistics_controls-center">
                <h6 class="statistics_list-item_title">Devices</h6>
                <div class="statistics_controls statistics_graph">
                    <!-- TODO: Сверстать контейнеры для графиков и кнопок девайсов -->
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn tv">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonTV"></use>
                            </svg>
                        </button>
                        <div class="device_name">
                            TV
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn kettle">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonKettle">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Kettle
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn washer">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonWasher">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Washer
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn fridge">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonFridge">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Fridge
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn stove">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonStove">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Stove
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn pc">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonPC"></use>
                            </svg>
                        </button>
                        <div class="device_name">
                            PC
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import "../assets/css/statistics";
</style>