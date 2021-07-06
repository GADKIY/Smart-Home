<template>
    <div class="security">
        <div class="security_form-wrap">
            <form class="security_form">
                <input class="security_input" id="name" type="text" placeholder="Name">
                <input class="security_input" id="pass" type="text" placeholder="Password">
                <button class="btn security_btn" type="submit">Enter</button>            
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/fonts/lack.css";
@import "../assets/css/mainScreen";

.security{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &_form-wrap{
        display: flex;
        align-items: center;
        height: 400px;
        max-width: 400px;
        width: 90%;
    }
    &_form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &_input{
        width: 90%;
        height: 70px;
        border-radius: 20px;
        margin-bottom: 40px;
        outline: none;
        font-family: 'Lack', sans-serif;
        font-size: rem(16px);
        padding-left: 25px;
        border: none;
        box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.14);
        transition: .2s;
        &:focus{
            box-shadow: 0px 4px 35px rgba(101, 189, 192, 0.7);
        }
    }
    &_btn{
        width: 90px;
        height: 35px;
        border-radius: 35px;
        background-color: $button-color-red;
        cursor: pointer;
        transition: .2s;
        border: none;
        outline: none;
        font-family: 'Lack', sans-serif;
        color: $font-color-white;
        &:hover, &:focus{
            background-color: $button-color-green;
        }
    }
}

</style>

<script>
export default {
    name: "security"
}
</script>