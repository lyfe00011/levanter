{ pkgs }: {
	deps = [
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.arcanPackages.ffmpeg
        pkgs.libwebp
        pkgs.imagemagick
        pkgs.git
	];
}