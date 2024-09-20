{
  description = "Fall fest yippee";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = inputs @ { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in {
        # might be nice to remotely build the site...
        # apps.get_key = {
        #   type = "app";
        #   program = (pkgs.writeShellScriptBin "get_key" ''
        #     head -c 32 /dev/urandom | base64 -w 0
        #   '') + "/bin/get_key";
        # };
        devShells.default = with pkgs; mkShellNoCC {
          packages = [
            importNpmLock.hooks.linkNodeModulesHook
            nodejs
          ];

          npmDeps = importNpmLock.buildNodeModules {
            npmRoot = ./.;
            inherit nodejs;
          };
        };
      });
}
