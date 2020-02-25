import StyledLog from 'styled-log'

export default function log() {
  new StyledLog().html`
    <span class="title">Hello!</span>
  
    <br/><br/>
    
    This website was built with <span class="keyword">Gridsome</span>, a <span class="keyword">Vue.js</span> framework, with <span class="keyword">SCSS</span> used for styling.
    
    <br/> 
    
    If you understood that sentence and enjoy this project, consider joining us!
    
    <br/> <br/> 
    
    Head on over to https://kaffsoftware.com/apply and make an application
  `.css`
    .title {
      font-size: 4em;
      font-weight: bold;
      text-decoration: underline;
      color: #1c8c56;
    }
    .keyword {
      color: #cf222c;
    }
  `.log();
  
  window.showLoser = () => {
    new StyledLog().html`
    <span class="title">It's Joe!</span>
  
    <br/><br/>
  
    <span>Joe is the loser. It's Loser Joe!</span>
  `.css`
    .title {
      font-size: 4em;
      font-weight: bold;
      text-decoration: underline;
      color: #6446C8;
    }
  `.log()
  }
}