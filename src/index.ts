/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} types definition files
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */

import { MoBrixEngineStore } from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} plugin component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type MoBrixDesignerComponent<T = {}, K = {}> = (
  props: {
    creatorConfig: MoBrixDesignerConfig<T>;
    store?: MoBrixEngineStore;
  } & K
) => JSX.Element;

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} plugin parameters
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type MoBrixDesignerPluginParameters<T extends Record<string, any> = {}> =
  {
    /**
     * Custom field callback. If set, it will be used to create a new field inside mobrix-designer config (or to check and format it,
     * if already defined but partially)
     * */
    field?: (creatorConfig: MoBrixDesignerConfig<T>) => {
      /** Plugin field name, required to bind the new field to this plugin */
      name: string;

      /** Plugin field content, optional (an empty object will be used if not set) */
      content?: Record<string, any>;
    };

    /** Component rendered inside the app container at the end of the init process */
    internalComponent?: MoBrixDesignerComponent<T>;

    /** Component rendered outside the app container at the end of the init process */
    externalComponent?: MoBrixDesignerComponent<T>;

    /**
     * Actions executed before the rendering process
     */
    before?: (config: MoBrixDesignerConfig<T>) => Record<string, any>;
  };

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} plugin creator
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type MoBrixDesignerPlugin<T extends Record<string, any> = {}> =
  (() => MoBrixDesignerPluginParameters<T>) & {
    /** Plugin unique name, to determine which plugin is enabled */
    feature: string;

    /** Match function, to compare this plugin with another one */
    match: (plugin: MoBrixDesignerPlugin) => boolean;

    /** Plugin type, to know which system (MoBrix-designer or MoBrix-engine) this plugin is designed for */
    type: string;
  };

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} configuration parameters
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type MoBrixDesignerConfig<T extends Record<string, any> = {}> = {
  /** Enable/disable debug mode */
  debug?: boolean;

  /** Custom plugins */
  plugins?: MoBrixDesignerPlugin[];

  /** Preloader element, displayed during loading (as fallback) */
  preloader?: () => JSX.Element;

  /** Error custom component, rendered when an error is catched by the App Error Boundary (if not set, the default error fallback will be used) */
  error?: () => JSX.Element;

  /** Header custom component (if not set, header won't be rendered) */
  header?: () => JSX.Element;

  /** Footer custom component (if not set, footer won't be rendered) */
  footer?: () => JSX.Element;

  /** Custom component, rendered below the router, before the footer */
  content?: () => JSX.Element;
} & T &
  Record<string, any>;
