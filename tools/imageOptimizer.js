import path from "path";
import {promises as fs} from "fs";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminGifsicle from "imagemin-gifsicle";

(async () => {
  const files = await imagemin(["src/assets/**/!(*.min).{jpg,png,svg,gif}"], {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        strip: true,
        quality: [0.2, 0.6],
      }),
      imageminSvgo({
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // disable plugins
                removeViewBox: false,
              },
            },
          },
        ],
      }),
      imageminGifsicle(),
    ],
  }).then((files) => {
    files.forEach(async (file) => {
      const source = path.parse(file.sourcePath);
      file.destinationPath = `${source.dir}/${source.name}.min${source.ext}`;
      await fs.writeFile(file.destinationPath, file.data);
    });
  });
})();
