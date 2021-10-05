<template>
   <section class="post">
            <div class="post__header">
                <div class="post__header-nav">
                    <div class="nav-icon">
                        
                    </div>
                    <div class="nav-icon">
                       <svg id="close" v-on:click="close()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div class="post__header-title">
                    {{ spice?.name }}
                </div>
                <div class="post__header-subtitle">
                    {{ spice?.name_translate }}
                </div>
            </div>
            <div class="post__body">
                <div class="post__body-text">
                    {{ spice?.description }}
                </div>
                <div class="post__body-image">
                    <img v-for="photo in spice.photo" :key="photo.id" :src="photo.photo_url"/>
                </div>
            </div>
            <div class="post__comment">
                <form class="form-comment">
                    <label>What do you think about this spice?</label>
                    <textarea v-model="form_comment" type="text" id="comment"></textarea>
                    <div class="comment-action" @click="postComment()" style="cursor:pointer">
                        Reply
                    </div>
                </form>
                <div class="comment" v-if="comments != null">
                    <div class="row" v-for="comment in comments" :key="comment.id">
                        <div class="comment-photo">
                            <img :src="comment.user.avatar_url"/>
                        </div>
                        <div class="comment-text">
                            {{comment.comment}}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
</template>

<script>
import gsap from "gsap";
import HttpClient from '../config/HttpConfig';
export default {
  name: "Post",
  data(){
      return{
          spice: null,
          form_comment: '',
          comments: null,
      }
  },
  beforeMount(){ 
    HttpClient
        .get('spice/'+this.$route.params.spice)
        .then((res) => {
            this.spice = res.data.spice;
            this.comments = this.spice.comments;
        })
  },
  mounted(){
      gsap.fromTo('.post',{opacity:0,y:300},{opacity:1, y:0,duration:1,delay:0.5})
  },
  methods: {
        close: function(){
            gsap.fromTo('.post',{opacity:1,y:0},{opacity:0,y:300})
            this.$router.push('/map')
        },
        postComment(){
            if(this.form_comment === '') return
            HttpClient
                .post('spice/'+this.$route.params.spice+'/comment', {comment: this.form_comment})
                .then(async (res) => {
                    this.comments.push({comment: this.form_comment, user: res.data.user});
                    this.form_comment = '';
                    await this.$nextTick()
                })
                .catch((err) => {
                    window.alert(err);
                })
        }
    }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/stylesheet/style.scss" lang="scss">
</style>
