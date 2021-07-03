<template>
    <div class="members">
    <h2 class="members_title">Members</h2>
    <div class="members_cards-list_wrap">
        <ul class="members_cards-list">
            <li class="members_card members_card-annie">
                <div class="members_card-inner--upper">
                    <div class="members_card-avatar">
                        <svg>
                            <use xlink:href="../assets/svg/sprite.svg#avatar"></use>
                        </svg>
                    </div>
                    <div class="members_card-name">
                        Annie Gulberg
                    </div>
                    <div class="members_card-owner">
                        Owner
                    </div>
                </div>
                <div class="members_card-inner--lower">
                    <div class="members_owner-status">
                        Status: At home
                    </div>
                    <div class="members_room">
                        Bedroom 1
                    </div>
                </div>
            </li>
            <li class="members_card members_card-john">
                <div class="members_card-inner--upper">
                    <div class="members_card-avatar">
                        <svg>
                            <use xlink:href="../assets/svg/sprite.svg#avatar"></use>
                        </svg>
                    </div>
                    <div class="members_card-name">
                        John Gulberg
                    </div>
                    <div class="members_card-owner">
                        Owner 2
                    </div>
                </div>
                <div class="members_card-inner--lower">
                    <div class="members_owner-status">
                        Status: At home
                    </div>
                    <div class="members_room">
                        Bedroom 1
                    </div>
                </div>
            </li>
            <li class="members_card members_card-marie">
                <div class="members_card-inner--upper">
                    <div class="members_card-avatar">
                        <svg>
                            <use xlink:href="../assets/svg/sprite.svg#avatar"></use>
                        </svg>
                    </div>
                    <div class="members_card-name">
                        Marie Gulberg
                    </div>
                    <div class="members_card-owner">
                        Owner 3
                    </div>
                </div>
                <div class="members_card-inner--lower">
                    <div class="members_owner-status">
                        Status: Out
                    </div>
                    <div class="members_room">
                        Bedroom 2
                    </div>
                </div>
            </li>
            <li class="members_card members_card-empty">
                <div class="members_add"></div>
            </li>

        </ul>
    </div>
</div>
</template>

<style lang="scss">
@import '../assets/css/members';
</style>