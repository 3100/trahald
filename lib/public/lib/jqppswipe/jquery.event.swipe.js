  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.event.swipe/js/jquery.event.swipe.js at master · stephband/jquery.event.swipe · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="UM4YRJk2W34uF61oURzC86seLq0zG+sHVFERP7CKiJI=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f70e4783e00fd4884a9e5e651a43933c9881caa8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-9882d2e517445a75f8ac994bda4df6096e695266.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-67b55380cff8d6766b298e6935a3c1db7d5c6d5d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="1212ad79754350a805cefbcd08a3dadf">

        <link data-pjax-transient rel='permalink' href='/stephband/jquery.event.swipe/blob/6a284657be7f6ab45173a7cc7e626dc8e129faa8/js/jquery.event.swipe.js'>
    <meta property="og:title" content="jquery.event.swipe"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/stephband/jquery.event.swipe"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery.event.swipe - jQuery custom events swipeleft, swiperight, swipeup and swipedown"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="stephband/jquery.event.swipe"/>

    <meta name="description" content="jquery.event.swipe - jQuery custom events swipeleft, swiperight, swipeup and swipedown" />

  <link href="https://github.com/stephband/jquery.event.swipe/commits/master.atom" rel="alternate" title="Recent Commits to jquery.event.swipe:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

      <a class="header-logo-wordmark" href="https://github.com/">Github</a>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li class="search"><a href="https://github.com/search">Search</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>

    <div class="header-actions">
        <a class="button primary" href="https://github.com/signup">Sign up for free</a>
      <a class="button" href="https://github.com/login?return_to=%2Fstephband%2Fjquery.event.swipe%2Fblob%2Fmaster%2Fjs%2Fjquery.event.swipe.js">Sign in</a>
    </div>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fstephband%2Fjquery.event.swipe"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/stephband/jquery.event.swipe/stargazers">
        104
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fstephband%2Fjquery.event.swipe"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/stephband/jquery.event.swipe/network" class="social-count">
        37
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/stephband" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">stephband</span>
                  </a></span> /
                <strong><a href="/stephband/jquery.event.swipe" class="js-current-repository">jquery.event.swipe</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/stephband/jquery.event.swipe" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/stephband/jquery.event.swipe/network" highlight="repo_network">Network</a></li>
    <li><a href="/stephband/jquery.event.swipe/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/stephband/jquery.event.swipe/issues" highlight="repo_issues">Issues <span class='counter'>1</span></a></li>



    <li><a href="/stephband/jquery.event.swipe/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/stephband/jquery.event.swipe/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">5</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/gh-pages/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/master/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/0.5.2/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.2" rel="nofollow" title="0.5.2">0.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/0.5.1/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.1" rel="nofollow" title="0.5.1">0.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/0.5.0/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.0" rel="nofollow" title="0.5.0">0.5.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/0.5/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5" rel="nofollow" title="0.5">0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/stephband/jquery.event.swipe/blob/0.4/js/jquery.event.swipe.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.4" rel="nofollow" title="0.4">0.4</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/stephband/jquery.event.swipe" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/stephband/jquery.event.swipe/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/stephband/jquery.event.swipe/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2492ba6120df89d38735d0f3acf70447 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:2492ba6120df89d38735d0f3acf70447 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stephband/jquery.event.swipe" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery.event.swipe</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stephband/jquery.event.swipe/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.event.swipe.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/jquery.event.swipe.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/stephband/jquery.event.swipe/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/stephband" rel="author">stephband</a></span>
    <time class="js-relative-date" datetime="2012-09-06T06:47:09-07:00" title="2012-09-06 06:47:09">September 06, 2012</time>
    <div class="commit-title">
        <a href="/stephband/jquery.event.swipe/commit/8f0fae12d0b7394edffaf463248bd105d3cc42c3" class="message">Whoops. Left console.logs in.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/stephband">stephband</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/stephband/jquery.event.swipe/blob/6a284657be7f6ab45173a7cc7e626dc8e129faa8/js/jquery.event.swipe.js" data-title="jquery.event.swipe/js/jquery.event.swipe.js at master · stephband/jquery.event.swipe · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>130 lines (108 sloc)</span>
                <span>3.236 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/stephband/jquery.event.swipe/raw/master/js/jquery.event.swipe.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/stephband/jquery.event.swipe/blame/master/js/jquery.event.swipe.js" class="button minibutton ">Blame</a>
                  <a href="/stephband/jquery.event.swipe/commits/master/js/jquery.event.swipe.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// jQuery.event.swipe</span></div><div class='line' id='LC2'><span class="c1">// 0.5</span></div><div class='line' id='LC3'><span class="c1">// Stephen Band</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="c1">// Dependencies</span></div><div class='line' id='LC6'><span class="c1">// jQuery.event.move 1.2</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="c1">// One of swipeleft, swiperight, swipeup or swipedown is triggered on</span></div><div class='line' id='LC9'><span class="c1">// moveend, when the move has covered a threshold ratio of the dimension</span></div><div class='line' id='LC10'><span class="c1">// of the target node, or has gone really fast. Threshold and velocity</span></div><div class='line' id='LC11'><span class="c1">// sensitivity changed with:</span></div><div class='line' id='LC12'><span class="c1">//</span></div><div class='line' id='LC13'><span class="c1">// jQuery.event.special.swipe.settings.threshold</span></div><div class='line' id='LC14'><span class="c1">// jQuery.event.special.swipe.settings.sensitivity</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">module</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>		<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC19'>		<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">module</span><span class="p">);</span></div><div class='line' id='LC20'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="c1">// Browser globals</span></div><div class='line' id='LC22'>		<span class="nx">module</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC23'>	<span class="p">}</span></div><div class='line' id='LC24'><span class="p">})(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">){</span></div><div class='line' id='LC25'>	<span class="kd">var</span> <span class="nx">add</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">add</span><span class="p">,</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>	    <span class="nx">remove</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">remove</span><span class="p">,</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>	    <span class="c1">// Just sugar, so we can have arguments in the same order as</span></div><div class='line' id='LC30'>	    <span class="c1">// add and remove.</span></div><div class='line' id='LC31'>	    <span class="nx">trigger</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>	    	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">node</span><span class="p">);</span></div><div class='line' id='LC33'>	    <span class="p">},</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	    <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC36'>	    	<span class="c1">// Ratio of distance over target finger must travel to be</span></div><div class='line' id='LC37'>	    	<span class="c1">// considered a swipe.</span></div><div class='line' id='LC38'>	    	<span class="nx">threshold</span><span class="o">:</span> <span class="mf">0.4</span><span class="p">,</span></div><div class='line' id='LC39'>	    	<span class="c1">// Faster fingers can travel shorter distances to be considered</span></div><div class='line' id='LC40'>	    	<span class="c1">// swipes. &#39;sensitivity&#39; controls how much. Bigger is shorter.</span></div><div class='line' id='LC41'>	    	<span class="nx">sensitivity</span><span class="o">:</span> <span class="mi">6</span></div><div class='line' id='LC42'>	    <span class="p">};</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>	<span class="kd">function</span> <span class="nx">moveend</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>		<span class="kd">var</span> <span class="nx">w</span><span class="p">,</span> <span class="nx">h</span><span class="p">,</span> <span class="nx">event</span><span class="p">;</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>		<span class="nx">w</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">;</span></div><div class='line' id='LC48'>		<span class="nx">h</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'>		<span class="c1">// Copy over some useful properties from the move event</span></div><div class='line' id='LC51'>		<span class="nx">event</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC52'>			<span class="nx">distX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="p">,</span></div><div class='line' id='LC53'>			<span class="nx">distY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="p">,</span></div><div class='line' id='LC54'>			<span class="nx">velocityX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span><span class="p">,</span></div><div class='line' id='LC55'>			<span class="nx">velocityY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span><span class="p">,</span></div><div class='line' id='LC56'>			<span class="nx">finger</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">finger</span></div><div class='line' id='LC57'>		<span class="p">};</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>		<span class="c1">// Find out which of the four directions was swiped</span></div><div class='line' id='LC60'>		<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">distX</span> <span class="o">&gt;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">distX</span> <span class="o">&gt;</span> <span class="o">-</span><span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="o">/</span><span class="nx">w</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">threshold</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">*</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="o">/</span><span class="nx">w</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sensitivity</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>					<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;swiperight&#39;</span><span class="p">;</span></div><div class='line' id='LC64'>					<span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC65'>				<span class="p">}</span></div><div class='line' id='LC66'>			<span class="p">}</span></div><div class='line' id='LC67'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC68'>				<span class="k">if</span> <span class="p">(</span><span class="o">-</span><span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="o">/</span><span class="nx">h</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">threshold</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">*</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="o">/</span><span class="nx">w</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sensitivity</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>					<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;swipeup&#39;</span><span class="p">;</span></div><div class='line' id='LC70'>					<span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC71'>				<span class="p">}</span></div><div class='line' id='LC72'>			<span class="p">}</span></div><div class='line' id='LC73'>		<span class="p">}</span></div><div class='line' id='LC74'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC75'>			<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">distX</span> <span class="o">&gt;</span> <span class="o">-</span><span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>				<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="o">/</span><span class="nx">h</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">threshold</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">*</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="o">/</span><span class="nx">w</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sensitivity</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>					<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;swipedown&#39;</span><span class="p">;</span></div><div class='line' id='LC78'>					<span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC79'>				<span class="p">}</span></div><div class='line' id='LC80'>			<span class="p">}</span></div><div class='line' id='LC81'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="k">if</span> <span class="p">(</span><span class="o">-</span><span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="o">/</span><span class="nx">w</span> <span class="o">&gt;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">threshold</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">*</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="o">/</span><span class="nx">w</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sensitivity</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>					<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;swipeleft&#39;</span><span class="p">;</span></div><div class='line' id='LC84'>					<span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentTarget</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC85'>				<span class="p">}</span></div><div class='line' id='LC86'>			<span class="p">}</span></div><div class='line' id='LC87'>		<span class="p">}</span></div><div class='line' id='LC88'>	<span class="p">}</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="kd">function</span> <span class="nx">getData</span><span class="p">(</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="s1">&#39;event_swipe&#39;</span><span class="p">);</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC94'>			<span class="nx">data</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">count</span><span class="o">:</span> <span class="mi">0</span> <span class="p">};</span></div><div class='line' id='LC95'>			<span class="nx">jQuery</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="s1">&#39;event_swipe&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC96'>		<span class="p">}</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="k">return</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC99'>	<span class="p">}</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">swipe</span> <span class="o">=</span></div><div class='line' id='LC102'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">swipeleft</span> <span class="o">=</span></div><div class='line' id='LC103'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">swiperight</span> <span class="o">=</span></div><div class='line' id='LC104'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">swipeup</span> <span class="o">=</span></div><div class='line' id='LC105'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">swipedown</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC106'>		<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">namespaces</span><span class="p">,</span> <span class="nx">eventHandle</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>			<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">getData</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>			<span class="c1">// If another swipe event is already setup, don&#39;t setup again.</span></div><div class='line' id='LC110'>			<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">count</span><span class="o">++</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>			<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;moveend&#39;</span><span class="p">,</span> <span class="nx">moveend</span><span class="p">);</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC115'>		<span class="p">},</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>		<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC118'>			<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">getData</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>			<span class="c1">// If another swipe event is still setup, don&#39;t teardown.</span></div><div class='line' id='LC121'>			<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">data</span><span class="p">.</span><span class="nx">count</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>			<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;moveend&#39;</span><span class="p">,</span> <span class="nx">moveend</span><span class="p">);</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC126'>		<span class="p">},</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>		<span class="nx">settings</span><span class="o">:</span> <span class="nx">settings</span></div><div class='line' id='LC129'>	<span class="p">};</span></div><div class='line' id='LC130'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648843" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04854s from fe3.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/stephband/jquery.event.swipe/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04907' data-host='fe3'></span>
    
  </body>
</html>

