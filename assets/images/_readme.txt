 Only the files whose .Permalink or .RelPermalink are used in a layout will be published to the public directory.
 Handling images in the /static folder doesn’t work. If you want to process or use images inside of Hugo, you have to move them into the /content or /assets folder.

<div class="my-12">
    {{ $image := .Page.Resources.GetMatch (.Params.cover | default "example.jpg") }}
    <img src="{{ $image.RelPermalink }}" alt="" class="w-96">
</div>

     -- https://www.markusantonwolf.com/blog/guide-for-different-ways-to-access-your-image-resources/
