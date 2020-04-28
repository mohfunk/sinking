<template>
    <div class="home">
        <h1 class="title">statues of sinking men</h1>
        <h3 class="title">Embrace The Stage of Sentimental Night</h3>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
            <form action="https://statuesofsinkingmen.us18.list-manage.com/subscribe/post?u=8df26402b4cd749dcb07033ac&amp;id=9c64b173f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <label for="mce-EMAIL">Subscribe to our mailing list</label>
                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8df26402b4cd749dcb07033ac_9c64b173f0" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Home',
    props: {
    },
    components: {
    },
})

export default class Home extends Vue {

}
</script>
<style lang="sass">

#mc_embed_signup form
  text-align: center
  padding: 50px 0 10px 0
  margin: 50px 0 10px 0

.mc-field-group
  display: inline-block
#mc_embed_signup
  input.email
    font-family: "Open Sans", "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif
    font-size: 15px
    border: 1px solid #ABB0B2
    -webkit-border-radius: 3px
    -moz-border-radius: 3px
    border-radius: 3px
    color: #343434
    background-color: #fff
    box-sizing: border-box
    height: 32px
    padding: 0px 0.4em
    display: inline-block
    margin: 0
    width: 350px
    vertical-align: top
  label
    display: block
    font-size: 16px
    padding-bottom: 10px
    font-weight: bold
  .clear
    display: inline-block
  .button
    font-size: 13px
    border: none
    -webkit-border-radius: 3px
    -moz-border-radius: 3px
    border-radius: 3px
    letter-spacing: .03em
    color: #fff
    background-color: #aaa
    box-sizing: border-box
    height: 32px
    line-height: 32px
    padding: 0 18px
    display: inline-block
    margin: 0
    transition: all 0.23s ease-in-out 0s
    &:hover
      background-color: #777
      cursor: pointer
  div
    &#mce-responses
      float: left
      top: -1.4em
      padding: 0em .5em 0em .5em
      overflow: hidden
      width: 90%
      margin: 0 5%
      clear: both
    &.response
      margin: 1em 0
      padding: 1em .5em .5em 0
      font-weight: bold
      float: left
      top: -1.5em
      z-index: 1
      width: 80%
  #mce-error-response
    display: none
  #mce-success-response
    color: #529214
    display: none
  label.error
    display: block
    float: none
    width: auto
    margin-left: 1.05em
    text-align: left
    padding: .5em 0

/* positions button horizontally in line with input

@media (max-width: 768px)
  #mc_embed_signup
    input.email
      width: 100%
      margin-bottom: 5px
    .clear
      display: block
      width: 100%
    .button
      width: 100%
      margin: 0
</style>
